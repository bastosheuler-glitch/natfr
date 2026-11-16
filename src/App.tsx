import { useState } from 'react'
import { I18nProvider, LANGS, useI18n } from './i18n'
import Eligibility from './features/Eligibility'
import Checklist from './features/Checklist'
import Interview from './features/Interview'
import Timeline from './features/Timeline'

const TABS = [
  { id: 'eligibility', key: 'nav.eligibility' },
  { id: 'checklist', key: 'nav.checklist' },
  { id: 'interview', key: 'nav.interview' },
  { id: 'timeline', key: 'nav.timeline' },
] as const

type TabId = (typeof TABS)[number]['id']

function Shell() {
  const { lang, setLang, t } = useI18n()
  const [tab, setTab] = useState<TabId>('eligibility')

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
          {TABS.map((tb) => (
            <button
              key={tb.id}
              className={tab === tb.id ? 'tab active' : 'tab'}
              onClick={() => setTab(tb.id)}
            >
              {t(tb.key)}
            </button>
          ))}
        </nav>
      </header>
      <main className="content">
        {tab === 'eligibility' && <Eligibility />}
        {tab === 'checklist' && <Checklist />}
        {tab === 'interview' && <Interview />}
        {tab === 'timeline' && <Timeline />}
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
