import { useMemo, useState } from 'react'
import { useI18n } from '../i18n'
import { QUESTIONS } from '../data/eligibility'
import { load, save } from '../storage'

type Answers = Record<string, string>

const STORAGE_KEY = 'vf.eligibility'

function evaluate(a: Answers) {
  const missing: string[] = []
  const residenceOk =
    ['five', 'study', 'refugee'].includes(a.residence) ||
    a.marriage === 'four' ||
    a.marriage === 'three'
  if (!residenceOk) missing.push('eligibility.missing.residence')
  if (a.language !== 'b1' && a.language !== 'b2') missing.push('eligibility.missing.language')
  if (a.resources !== 'stable') missing.push('eligibility.missing.resources')
  if (a.record !== 'clean') missing.push('eligibility.missing.record')
  if (a.values !== 'good') missing.push('eligibility.missing.values')
  const answeredAll = QUESTIONS.every((q) => a[q.id])
  return { missing, answeredAll, valuesOk: a.values === 'good' }
}

export default function Eligibility() {
  const { t, tr } = useI18n()
  const [answers, setAnswers] = useState<Answers>(() => load(STORAGE_KEY, {}))

  const update = (id: string, value: string) => {
    const next = { ...answers, [id]: value }
    setAnswers(next)
    save(STORAGE_KEY, next)
  }

  const reset = () => {
    setAnswers({})
    save(STORAGE_KEY, {})
  }

  const result = useMemo(() => evaluate(answers), [answers])

  return (
    <section>
      <h2>{t('eligibility.title')}</h2>
      <p className="intro">{t('eligibility.intro')}</p>

      {QUESTIONS.map((q) => (
        <fieldset key={q.id} className="question">
          <legend>{tr(q.label)}</legend>
          {q.options.map((o) => (
            <label key={o.id} className="option">
              <input
                type="radio"
                name={q.id}
                checked={answers[q.id] === o.id}
                onChange={() => update(q.id, o.id)}
              />
              <span>{tr(o.label)}</span>
            </label>
          ))}
        </fieldset>
      ))}

      {result.answeredAll && (
        <div className={result.missing.length === 0 ? 'result ok' : 'result no'}>
          <h3>{t('eligibility.result.title')}</h3>
          {result.missing.length === 0 ? (
            <p>
              {t(result.valuesOk ? 'eligibility.result.eligible' : 'eligibility.result.prepare')}
            </p>
          ) : (
            <>
              <p>{t('eligibility.result.notYet')}</p>
              <ul>
                {result.missing.map((m) => (
                  <li key={m}>{t(m)}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      <button className="btn" onClick={reset}>
        {t('common.reset')}
      </button>
      <p className="note">{t('common.disclaimer')}</p>
    </section>
  )
}
