import { useCallback, useEffect, useState } from 'react'

const THEME_KEY = 'portfolio-theme'
const DEFAULT_THEME = 'terracotta'

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY)
  } catch {
    return null
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => getStoredTheme() || DEFAULT_THEME)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = useCallback((next) => {
    setThemeState(next)
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme still
      // applies for this session, it just won't persist across reloads.
    }
  }, [])

  return { theme, setTheme }
}
