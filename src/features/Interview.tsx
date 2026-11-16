import { useState } from 'react'
import { fmt, useI18n } from '../i18n'
import { QUIZ } from '../data/quiz'

export default function Interview() {
  const { t, tr } = useI18n()
  const [started, setStarted] = useState(false)
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const start = () => {
    setStarted(true)
    setIdx(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (!started) {
    return (
      <section>
        <h2>{t('interview.title')}</h2>
        <p className="intro">{t('interview.intro')}</p>
        <div className="card center">
          <p>{fmt(t('interview.qOf'), { n: 1, total: QUIZ.length })}</p>
          <button className="btn primary" onClick={start}>
            {t('interview.start')}
          </button>
        </div>
      </section>
    )
  }

  if (finished) {
    return (
      <section>
        <h2>{t('interview.title')}</h2>
        <div className={score / QUIZ.length >= 0.7 ? 'result ok' : 'result no'}>
          <h3>{fmt(t('interview.score'), { score, total: QUIZ.length })}</h3>
          <p>{t('common.disclaimer')}</p>
        </div>
        <button className="btn primary" onClick={start}>
          {t('interview.again')}
        </button>
      </section>
    )
  }

  const q = QUIZ[idx]

  const choose = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (q.options[i].correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (idx + 1 >= QUIZ.length) setFinished(true)
    else {
      setIdx(idx + 1)
      setSelected(null)
    }
  }

  return (
    <section>
      <h2>{t('interview.title')}</h2>
      <p className="counter">{fmt(t('interview.qOf'), { n: idx + 1, total: QUIZ.length })}</p>
      <div className="card">
        <p className="quiz-question">{tr(q.q)}</p>
        <div className="quiz-options">
          {q.options.map((o, i) => {
            let cls = 'quiz-option'
            if (selected !== null) {
              if (o.correct) cls += ' correct'
              else if (i === selected) cls += ' wrong'
            }
            return (
              <button key={i} className={cls} onClick={() => choose(i)}>
                {tr(o.label)}
              </button>
            )
          })}
        </div>
        {selected !== null && (
          <div className="explanation">
            <p className="feedback">{q.options[selected].correct ? t('common.correct') : t('common.wrong')}</p>
            <p>
              <strong>{t('common.explanation')} : </strong>
              {tr(q.explanation)}
            </p>
            <button className="btn primary" onClick={next}>
              {idx + 1 >= QUIZ.length ? t('interview.finish') : t('interview.next')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
