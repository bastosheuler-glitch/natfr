import { useState } from 'react'
import { useI18n } from '../i18n'
import { DOCS } from '../data/documents'
import { load, save } from '../storage'

interface Profile {
  married: boolean
  kids: boolean
  abroad: boolean
}

const CHECK_KEY = 'vf.checklist'
const PROFILE_KEY = 'vf.checklist.profile'

const DEFAULT_PROFILE: Profile = { married: false, kids: false, abroad: true }

export default function Checklist() {
  const { t, tr } = useI18n()
  const [checked, setChecked] = useState<Record<string, boolean>>(() => load(CHECK_KEY, {}))
  const [profile, setProfile] = useState<Profile>(() => load(PROFILE_KEY, DEFAULT_PROFILE))

  const updateProfile = (key: keyof Profile, value: boolean) => {
    const next = { ...profile, [key]: value }
    setProfile(next)
    save(PROFILE_KEY, next)
  }

  const toggle = (id: string) => {
    const next = { ...checked, [id]: !checked[id] }
    setChecked(next)
    save(CHECK_KEY, next)
  }

  const reset = () => {
    setChecked({})
    save(CHECK_KEY, {})
  }

  const visible = DOCS.filter(
    (d) =>
      (!d.marriedOnly || profile.married) &&
      (!d.kidsOnly || profile.kids) &&
      (!d.abroadOnly || profile.abroad),
  )
  const done = visible.filter((d) => checked[d.id]).length
  const pct = visible.length ? Math.round((done / visible.length) * 100) : 0

  return (
    <section>
      <h2>{t('checklist.title')}</h2>
      <p className="intro">{t('checklist.intro')}</p>

      <div className="card profile">
        <h3>{t('checklist.profile')}</h3>
        <label className="option">
          <input
            type="checkbox"
            checked={profile.married}
            onChange={(e) => updateProfile('married', e.target.checked)}
          />
          <span>{t('checklist.profile.married')}</span>
        </label>
        <label className="option">
          <input
            type="checkbox"
            checked={profile.kids}
            onChange={(e) => updateProfile('kids', e.target.checked)}
          />
          <span>{t('checklist.profile.kids')}</span>
        </label>
        <label className="option">
          <input
            type="checkbox"
            checked={profile.abroad}
            onChange={(e) => updateProfile('abroad', e.target.checked)}
          />
          <span>{t('checklist.profile.abroad')}</span>
        </label>
      </div>

      <div className="progress-wrap">
        <div className="progress">
          <div className="progress-bar" style={{ width: `${pct}%` }} />
        </div>
        <span className="progress-label">
          {done}/{visible.length} {t('checklist.progress')}
        </span>
      </div>

      {visible.length === 0 ? (
        <p className="intro">{t('checklist.empty')}</p>
      ) : (
        <ul className="doc-list">
          {visible.map((d) => (
            <li key={d.id} className={checked[d.id] ? 'doc-row done' : 'doc-row'}>
              <label>
                <input type="checkbox" checked={!!checked[d.id]} onChange={() => toggle(d.id)} />
                <span>
                  {tr(d.label)}
                  {d.optional && <em className="badge">{t('common.optional')}</em>}
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}

      <button className="btn" onClick={reset}>
        {t('common.reset')}
      </button>
    </section>
  )
}
