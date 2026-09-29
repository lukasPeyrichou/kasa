import { useState } from 'react'
import './Collapse.scss'

// isOpen en false de base
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__arrow" aria-hidden="true">
          <svg width="23" height="13" viewBox="0 0 23 13" fill="none">
            <path
              d="M2 11L11.5 2L21 11"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`collapse__panel${isOpen ? ' collapse__panel--open' : ''}`}>
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
