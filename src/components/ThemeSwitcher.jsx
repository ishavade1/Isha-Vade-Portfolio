import { useEffect, useRef, useState } from 'react'
import { Palette } from 'lucide-react'
import { themes } from '../data/content'

export default function ThemeSwitcher({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    function onEscape(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [])

  return (
    <div className="theme-switcher" ref={wrapRef}>
      <button
        type="button"
        className="theme-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Change theme"
        onClick={(e) => {
          e.stopPropagation()
          setOpen((o) => !o)
        }}
      >
        <Palette />
      </button>

      <div className={`theme-menu${open ? ' open' : ''}`} role="menu">
        <p className="theme-menu-label">Theme</p>
        {themes.map((t) => (
          <button
            key={t.value}
            type="button"
            role="menuitem"
            className="theme-option"
            aria-current={theme === t.value}
            onClick={() => {
              setTheme(t.value)
              setOpen(false)
            }}
          >
            <span className={`theme-swatch swatch-${t.value}`}></span>
            <span className="theme-option-text">
              <span className="theme-option-name">{t.name}</span>
              <span className="theme-option-desc">{t.description}</span>
            </span>
            {t.recommended && <span className="theme-recommended">Recommended</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
