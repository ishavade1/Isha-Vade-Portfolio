import { useEffect, useState } from 'react'

const VARS = [
  '--text-secondary',
  '--border',
  '--card',
  '--chart-1',
  '--chart-2',
  '--chart-3',
  '--chart-4',
  '--chart-5',
]

function readColors() {
  const styles = getComputedStyle(document.documentElement)
  const out = {}
  for (const name of VARS) {
    out[name.replace('--', '')] = styles.getPropertyValue(name).trim()
  }
  return out
}

/**
 * Returns resolved hex/rgb color values for the current theme, re-read
 * whenever `theme` changes. Chart libraries render to SVG attributes that
 * don't reliably resolve CSS custom properties, so components need literal
 * color strings that update on theme switch.
 */
export function useChartColors(theme) {
  const [colors, setColors] = useState(readColors)

  useEffect(() => {
    setColors(readColors())
  }, [theme])

  return colors
}
