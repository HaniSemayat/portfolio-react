import './SkillIcon.css'

function SkillIcon({ name }) {
  const images = {
    python: '/images/skills/python.svg',
    html: '/images/skills/html.svg',
    git: {
      light: '/images/skills/gitdark.svg',
      dark: '/images/skills/gitlight.svg',
    },
    node: {
      light: '/images/skills/nodejsStackedDark.svg',
      dark: '/images/skills/nodejsStackedLight.svg',
    },
  }

  if (name === 'git' || name === 'node') {
    const image = images[name]

    return (
      <span className={`skill-icon skill-icon-${name}`}>
        <img
          src={image.light}
          alt=""
          className="skill-logo skill-logo-light"
        />

        <img
          src={image.dark}
          alt=""
          className="skill-logo skill-logo-dark"
        />
      </span>
    )
  }

  if (images[name]) {
    return (
      <span className={`skill-icon skill-icon-${name}`}>
        <img
          src={images[name]}
          alt=""
          className="skill-logo"
        />
      </span>
    )
  }

  const icons = {
    javascript: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 7v7.5c0 1.7-.8 2.5-2.3 2.5-1.2 0-2-.6-2.4-1.6" />
        <path d="M15 13.5c.2 1 .9 1.5 2 1.5 1 0 1.7-.4 1.7-1.2 0-2-3.7-1.2-3.7-3.7 0-1.5 1.2-2.5 3-2.5 1.1 0 2 .4 2.6 1.2" />
      </svg>
    ),

    css: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 3 1.4 16.2L12 21l5.6-1.8L19 3H5Z" />
        <path d="M8 7h8M8.5 11h6.5M9 15l3 .9 3-.9" />
      </svg>
    ),

    react: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="9" ry="3.8" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),

    next: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 8v8M8 8l8 8M16 8v8" />
      </svg>
    ),

    ui: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 9v11M13 12h4M13 15h3" />
      </svg>
    ),

    api: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="7" r="2.5" />
        <circle cx="18" cy="17" r="2.5" />
        <path d="m8.5 11 7-3M8.5 13l7 3" />
      </svg>
    ),

    qa: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.4 2.8 8.1 7 10 4.2-1.9 7-5.6 7-10V6l-7-3Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </svg>
    ),

    testing: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h8M9 4v6l-4 7a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-4-7V4" />
        <path d="M8 15h8M10 12h4" />
      </svg>
    ),

    debugging: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 5h6l2 3v7l-2 4H9l-2-4V8l2-3Z" />
        <path d="M9 5 7 3M15 5l2-2M7 10H4M20 10h-3M7 14H4M20 14h-3M9 19l-2 2M15 19l2 2" />
      </svg>
    ),
  }

  const iconColors = {
    javascript: '#d8c63f',
    css: '#1572b6',
    react: '#61dafb',
    next: 'currentColor',
    ui: '#8b9cff',
    api: '#9b8aff',
    qa: '#8b9cff',
    testing: '#c66cff',
    debugging: '#ff6b91',
  }

  return (
    <span
      className="skill-icon skill-icon-custom"
      style={{ color: iconColors[name] }}
    >
      {icons[name]}
    </span>
  )
}

export default SkillIcon
