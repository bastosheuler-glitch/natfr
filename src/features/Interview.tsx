import { useEffect, useState } from 'react'
import { fmt, useI18n } from '../i18n'
import { ALL_QUESTIONS, THEMES, shuffle, type QuizQuestion } from '../data/quiz'

type Screen = 'menu' | 'quiz' | 'result'

interface BestScore {
  score: number
  total: number
}

const BEST_KEY = 'vf.best'

function loadBest(): Record<string, BestScore> {
  try {
    return JSON.parse(localStorage.getItem(BEST_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function saveBest(themeId: string, score: number, total: number): boolean {
  const best = loadBest()
  const prev = best[themeId]
  if (!prev || score / total > prev.score / prev.total) {
    best[themeId] = { score, total }
    localStorage.setItem(BEST_KEY, JSON.stringify(best))
    return true
  }
  return false
}

interface InterviewProps {
  pendingTheme: string | null
  onConsume: () => void
}

export default function Interview({ pendingTheme, onConsume }: InterviewProps) {
  const { t, tr } = useI18n()
  const [screen, setScreen] = useState<Screen>('menu')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [themeId, setThemeId] = useState('')
  const [themeTitle, setThemeTitle] = useState('')
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState<QuizQuestion[]>([])
  const [isRecord, setIsRecord] = useState(false)
  const [best, setBest] = useState<Record<string, BestScore>>(loadBest)

  const start = (source: QuizQuestion[], id: string, title: string) => {
    setQuestions(shuffle(source).map((q) => ({ ...q, options: shuffle(q.options) })))
    setThemeId(id)
    setThemeTitle(title)
    setIdx(0)
    setSelected(null)
    setScore(0)
    setWrong([])
    setIsRecord(false)
    setScreen('quiz')
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (!pendingTheme) return
    const theme = THEMES.find((th) => th.id === pendingTheme)
    if (theme) start(theme.questions, theme.id, tr(theme.title))
    onConsume()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingTheme])

  const choose = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    const q = questions[idx]
    if (q.options[i].correct) setScore((s) => s + 1)
    else setWrong((w) => [...w, q])
  }

  const next = () => {
    if (idx + 1 >= questions.length) {
      setIsRecord(saveBest(themeId, score, questions.length))
      setBest(loadBest())
      setScreen('result')
      window.scrollTo(0, 0)
    } else {
      setIdx(idx + 1)
      setSelected(null)
    }
  }

  const quit = () => {
    setScreen('menu')
    window.scrollTo(0, 0)
  }

  if (screen === 'menu') {
    return (
      <section>
        <h2>{t('interview.title')}</h2>
        <p className="intro">{t('interview.intro')}</p>
        <div className="card hero">
          <h3 className="hero-title">🎯 {t('learn.howTitle')}</h3>
          <ol className="hero-steps">
            <li>{t('learn.step1')}</li>
            <li>{t('learn.step2')}</li>
            <li>{t('learn.step3')}</li>
          </ol>
        </div>
        <h3 className="choose">{t('interview.choose')}</h3>
        <button className="card theme-card" onClick={() => start(ALL_QUESTIONS, 'mix', t('interview.mix'))}>
          <span className="theme-head">
            <span className="theme-icon">🎲</span>
            <span className="theme-title">{t('interview.mix')}</span>
            <span className="theme-arrow">→</span>
          </span>
          <span className="theme-desc">{t('interview.mixDesc')}</span>
          <span className="theme-count">
            {fmt(t('interview.questionsCount'), { n: ALL_QUESTIONS.length })}
          </span>
        </button>
        {THEMES.map((theme, ti) => {
          const b = best[theme.id]
          return (
            <button
              key={theme.id}
              className="card theme-card"
              style={{ animationDelay: `${(ti + 1) * 0.05}s` }}
              onClick={() => start(theme.questions, theme.id, tr(theme.title))}
            >
              <span className="theme-head">
                <span className="theme-icon">{theme.icon}</span>
                <span className="theme-title">{tr(theme.title)}</span>
                <span className="theme-arrow">→</span>
              </span>
              {b && (
                <span className="best-badge">
                  🏅 {fmt(t('interview.best'), { score: b.score, total: b.total })}
                </span>
              )}
              <span className="theme-count">
                {fmt(t('interview.questionsCount'), { n: theme.questions.length })}
              </span>
            </button>
          )
        })}
      </section>
    )
  }

  if (screen === 'result') {
    const ratio = score / questions.length
    const passed = ratio >= 0.7
    const message = ratio >= 0.9 ? t('interview.excellent') : passed ? t('interview.good') : t('interview.keep')
    return (
      <section>
        <h2>{themeTitle}</h2>
        <div className={passed ? 'result ok result-center' : 'result no result-center'}>
          <span className="result-emoji">{passed ? '🎉' : '💪'}</span>
          <h3>{fmt(t('interview.score'), { score, total: questions.length })}</h3>
          <p>{message}</p>
          {isRecord && <p className="record-banner">{t('interview.newRecord')}</p>}
        </div>
        {wrong.length > 0 ? (
          <div className="review">
            <h3>{t('interview.reviewTitle')}</h3>
            {wrong.map((w, i) => {
              const correct = w.options.find((o) => o.correct)
              return (
                <div key={i} className="review-item">
                  <p className="review-q">{tr(w.q)}</p>
                  <p className="review-a">✓ {correct ? tr(correct.label) : ''}</p>
                  <p className="review-e">{tr(w.explanation)}</p>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="review-perfect">🌟 {t('interview.allCorrect')}</p>
        )}
        <div className="btn-row">
          <button className="btn primary" onClick={() => start(questions, themeId, themeTitle)}>
            {t('interview.again')}
          </button>
          <button className="btn" onClick={quit}>
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
      <div className="quiz-top">
        <p className="counter">{fmt(t('interview.qOf'), { n: idx + 1, total: questions.length })}</p>
        <span className="score-chip">
          {fmt(t('interview.score'), { score, total: questions.length })}
        </span>
      </div>
      <div className="progress-wrap">
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${((idx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="card">
        <p className="quiz-question">{tr(q.q)}</p>
        <div className="quiz-options">
          {q.options.map((o, i) => {
            const answered = selected !== null
            let cls = 'quiz-option'
            if (answered) {
              if (o.correct) cls += ' correct'
              else if (i === selected) cls += ' wrong'
            }
            return (
              <button key={i} className={cls} disabled={answered} onClick={() => choose(i)}>
                <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                <span className="opt-label">{tr(o.label)}</span>
                {answered && o.correct && <span className="opt-icon">✓</span>}
                {answered && i === selected && !o.correct && <span className="opt-icon">✗</span>}
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
      <div className="btn-row">
        <button className="btn quit-btn" onClick={quit}>
          {t('interview.quit')}
        </button>
      </div>
    </section>
  )
}
