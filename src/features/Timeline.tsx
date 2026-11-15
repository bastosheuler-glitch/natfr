import { useState } from 'react'
import { fmt, useI18n } from '../i18n'
import { STEPS } from '../data/timeline'
import { load, save } from '../storage'

const KEY = 'vf.timeline'

const DAY_MS = 86_400_000

export default function Timeline() {
  const { t, tr, lang } = useI18n()
  const [dates, setDates] = useState<Record<string, string>>(() => load(KEY, {}))

  const setDate = (id: string, value: string) => {
    const next = { ...dates, [id]: value }
    setDates(next)
    save(KEY, next)
  }

  const reset = () => {
    setDates({})
    save(KEY, {})
  }

  const deposit = dates['deposit'] ? new Date(dates['deposit']) : null
  const daysSince = deposit ? Math.floor((Date.now() - deposit.getTime()) / DAY_MS) : null
  const when = daysSince === null ? '' : daysSince <= 0 ? t('timeline.today') : fmt(t('timeline.daysAgo'), { days: daysSince })

  return (
    <section>
      <h2>{t('timeline.title')}</h2>
      <p className="intro">{t('timeline.intro')}</p>

      {daysSince !== null && daysSince >= 0 && (
        <div className="result info">
          <p>{fmt(t('timeline.sinceDeposit'), { when })}</p>
        </div>
      )}

      <ol className="timeline">
        {STEPS.map((s) => {
          const date = dates[s.id]
          return (
            <li key={s.id} className={date ? 'step done' : 'step'}>
              <div className="step-head">
                <span className="step-label">{tr(s.label)}</span>
                <span className={date ? 'badge ok' : 'badge'}>
                  {date
                    ? `${t('timeline.done')} ${new Date(date).toLocaleDateString(lang)}`
                    : t('timeline.pending')}
                </span>
              </div>
              <p className="step-duration">{tr(s.duration)}</p>
              <input
                type="date"
                value={date ?? ''}
                onChange={(e) => setDate(s.id, e.target.value)}
              />
            </li>
          )
        })}
      </ol>

      <button className="btn" onClick={reset}>
        {t('common.reset')}
      </button>
    </section>
  )
}
