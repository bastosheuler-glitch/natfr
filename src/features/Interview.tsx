import { useEffect, useState } from 'react'
import { fmt, useI18n } from '../i18n'
import { ALL_QUESTIONS, THEMES, shuffle, type QuizQuestion } from '../data/quiz'

type Screen = 'menu' | 'quiz' | 'result'

interface InterviewProps {
  pendingTheme: string | null
  onConsume: () => void
}

export default function Interview({ pendingTheme, onConsume }: InterviewProps) {
  const { t, tr } = useI18n()
  const [screen, setScreen] = useState<Screen>('menu')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [themeTitle, setThemeTitle] = useState('')
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const start = (source: QuizQuestion[], title: string) => {
    setQuestions(shuffle(source).map((q) => ({ ...q, options: shuffle(q.options) })))
    setThemeTitle(title)
    setIdx(0)
    setSelected(null)
    setScore(0)
    setScreen('quiz')
  }

  useEffect(() => {
    if (!pendingTheme) return
    const theme = THEMES.find((th) => th.id === pendingTheme)
    if (theme) start(theme.questions, tr(theme.title))
    onConsume()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingTheme])

  const choose = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (questions[idx].options[i].correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (idx + 1 >= questions.length) setScreen('result')
    else {
      setIdx(idx + 1)
      setSelected(null)
    }
  }

  if (screen === 'menu') {
    return (
      <section>
        <h2>{t('interview.title')}</h2>
        <p className="intro">{t('interview.intro')}</p>
        <h3 className="choose">{t('interview.choose')}</h3>
        <button className="card theme-card" onClick={() => start(ALL_QUESTIONS, t('interview.mix'))}>
          <span className="theme-title">{t('interview.mix')}</span>
          <span className="theme-desc">{t('interview.mixDesc')}</span>
          <span className="theme-count">
            {fmt(t('interview.questionsCount'), { n: ALL_QUESTIONS.length })}
          </span>
        </button>
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            className="card theme-card"
            onClick={() => start(theme.questions, tr(theme.title))}
          >
            <span className="theme-title">{tr(theme.title)}</span>
            <span className="theme-count">
              {fmt(t('interview.questionsCount'), { n: theme.questions.length })}
            </span>
          </button>
        ))}
      </section>
    )
  }

  if (screen === 'result') {
    const passed = score / questions.length >= 0.7
    return (
      <section>
        <h2>{themeTitle}</h2>
        <div className={passed ? 'result ok' : 'result no'}>
          <h3>{fmt(t('interview.score'), { score, total: questions.length })}</h3>
          <p>{t(passed ? 'interview.good' : 'interview.keep')}</p>
        </div>
        <div className="btn-row">
          <button className="btn primary" onClick={() => start(questions, themeTitle)}>
            {t('interview.again')}
          </button>
          <button className="btn" onClick={() => setScreen('menu')}>
            {t('interview.otherTheme')}
          </button>
        </div>
        <p className="note">{t('common.disclaimer')}</p>
      </section>
    )
  }

  const q = questions[idx]

  return (
    <section>
      <h2>{themeTitle}</h2>
      <p className="counter">{fmt(t('interview.qOf'), { n: idx + 1, total: questions.length })}</p>
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
            <p className="feedback">
              {q.options[selected].correct ? t('common.correct') : t('common.wrong')}
            </p>
            <p>
              <strong>{t('common.explanation')} : </strong>
              {tr(q.explanation)}
            </p>
            <button className="btn primary" onClick={next}>
              {idx + 1 >= questions.length ? t('interview.finish') : t('interview.next')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
