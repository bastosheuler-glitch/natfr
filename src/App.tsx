import { useState } from 'react'
import { I18nProvider, LANGS, useI18n } from './i18n'
import Interview from './features/Interview'
import Learn from './features/Learn'

type Tab = 'learn' | 'quiz'

function Shell() {
  const { lang, setLang, t } = useI18n()
  const [tab, setTab] = useState<Tab>('learn')
  const [pendingTheme, setPendingTheme] = useState<string | null>(null)

  const trainTheme = (themeId: string) => {
    setPendingTheme(themeId)
    setTab('quiz')
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-row">
          <div>
            <h1>{t('app.name')}</h1>
            <p className="tagline">{t('app.tagline')}</p>
          </div>
          <label className="lang-select">
            <span>{t('lang.label')}</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
            >
              {LANGS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <nav className="tabbar">
          <button
            className={tab === 'learn' ? 'tab active' : 'tab'}
            onClick={() => setTab('learn')}
          >
            {t('nav.learn')}
          </button>
          <button
            className={tab === 'quiz' ? 'tab active' : 'tab'}
            onClick={() => setTab('quiz')}
          >
            {t('nav.quiz')}
          </button>
        </nav>
      </header>
      <main className="content">
        {tab === 'learn' ? (
          <Learn onTrain={trainTheme} />
        ) : (
          <Interview pendingTheme={pendingTheme} onConsume={() => setPendingTheme(null)} />
        )}
      </main>
      <footer className="app-footer">
        <p>{t('footer.disclaimer')}</p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Shell />
    </I18nProvider>
  )
}
