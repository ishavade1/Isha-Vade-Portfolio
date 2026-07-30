import { useState } from 'react'
import { Menu } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import { profile } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ theme, setTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav className={`nav-links${mobileOpen ? ' mobile-open' : ''}`} id="navLinks">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />

          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Get in touch</span>
          </a>

          <button
            className="nav-burger"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}
