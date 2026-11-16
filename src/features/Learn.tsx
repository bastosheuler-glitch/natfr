import { useEffect, useState } from 'react'
import { fmt, useI18n } from '../i18n'
import { LESSONS, type Lesson } from '../data/lessons'
import { THEMES } from '../data/quiz'
import { HistoryIllo, InstitutionsIllo, RightsIllo, ValuesIllo } from './illustrations'

function Illustration({ lesson }: { lesson: Lesson }) {
  const { t } = useI18n()
  switch (lesson.id) {
    case 'histoire':
      return <HistoryIllo dates={lesson.keyDates} />
    case 'valeurs':
      return (
        <ValuesIllo
          devise={[t('learn.devise.liberte'), t('learn.devise.egalite'), t('learn.devise.fraternite')]}
        />
      )
    case 'institutions':
      return (
        <InstitutionsIllo
          labels={{
            people: t('learn.illo.people'),
            vote: t('learn.illo.vote'),
            president: t('learn.illo.president'),
            parliament: t('learn.illo.parliament'),
            laws: t('learn.illo.laws'),
          }}
        />
      )
    case 'droits':
      return (
        <RightsIllo
          items={[
            { icon: '🗳️', label: t('learn.rights.vote') },
            { icon: '⚖️', label: t('learn.rights.jury') },
            { icon: '🧾', label: t('learn.rights.taxes') },
            { icon: '📜', label: t('learn.rights.laws') },
            { icon: '🏥', label: t('learn.rights.health') },
            { icon: '🤝', label: t('learn.rights.solidarity') },
          ]}
        />
      )
    default:
      return null
  }
}

export default function Learn({ onTrain }: { onTrain: (themeId: string) => void }) {
  const { t, tr } = useI18n()
  const [openId, setOpenId] = useState<string | null>(null)
  const lesson = LESSONS.find((l) => l.id === openId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [openId])

  if (!lesson) {
    return (
      <section>
        <h2>{t('learn.title')}</h2>
        <p className="intro">{t('learn.intro')}</p>
        <div className="card hero">
          <h3 className="hero-title">👋 {t('learn.howTitle')}</h3>
          <ol className="hero-steps">
            <li>{t('learn.step1')}</li>
            <li>{t('learn.step2')}</li>
            <li>{t('learn.step3')}</li>
          </ol>
        </div>
        {LESSONS.map((l, i) => (
          <button
            key={l.id}
            className="card theme-card"
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setOpenId(l.id)}
          >
            <span className="theme-head">
              <span className="theme-icon">
                {THEMES.find((th) => th.id === l.id)?.icon ?? '📖'}
              </span>
              <span className="theme-title">{tr(l.title)}</span>
              <span className="theme-arrow">→</span>
            </span>
            <span className="theme-desc">{tr(l.intro)}</span>
            <span className="theme-count">
              {fmt(t('learn.sectionsCount'), { n: l.sections.length })} · {fmt(t('learn.videosCount'), { n: l.videos.length })} · {t('learn.read')} →
            </span>
          </button>
        ))}
      </section>
    )
  }

  return (
    <section>
      <button className="btn" onClick={() => setOpenId(null)}>
        ← {t('learn.back')}
      </button>
      <h2>{tr(lesson.title)}</h2>
      <p className="intro">{tr(lesson.intro)}</p>

      <div className="card illo-card">
        <Illustration lesson={lesson} />
      </div>

      {lesson.sections.map((s, i) => (
        <div key={i} className="lesson-section">
          <h3>{tr(s.title)}</h3>
          <p>{tr(s.text)}</p>
        </div>
      ))}

      <h3 className="choose">{t('learn.keyDates')}</h3>
      <div className="date-chips">
        {lesson.keyDates.map((d, i) => (
          <div key={i} className="date-chip">
            <span className="date-year">{d.year}</span>
            <span className="date-label">{tr(d.label)}</span>
          </div>
        ))}
      </div>

      {lesson.videos.length > 0 && (
        <>
          <h3 className="choose">{t('learn.videos')}</h3>
          <div className="video-grid">
            {lesson.videos.map((v, i) => (
              <div key={i} className="video-card">
                <p className="video-title">{tr(v.title)}</p>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={tr(v.title)}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
          <p className="note">{t('learn.videosNote')}</p>
        </>
      )}

      <div className="btn-row">
        <button className="btn primary" onClick={() => onTrain(lesson.id)}>
          {t('learn.train')}
        </button>
      </div>
      <p className="note">{t('common.disclaimer')}</p>
    </section>
  )
}
