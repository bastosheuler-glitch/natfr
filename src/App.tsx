import { I18nProvider, LANGS, useI18n } from './i18n'
import Interview from './features/Interview'

function Shell() {
  const { lang, setLang, t } = useI18n()

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
      </header>
      <main className="content">
        <Interview />
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
