import { useEffect, useState } from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    )

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  function toggleTheme() {
    setIsDark((currentTheme) => !currentTheme)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀' : '◐'}
    </button>
  )
}

export default ThemeToggle