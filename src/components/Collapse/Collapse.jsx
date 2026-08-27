import { useState } from 'react'
import chevron from '../../assets/chevron.svg'
import './Collapse.scss'

function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`collapse${isOpen ? ' collapse--open' : ''}`}>
      <div className="collapse__header">
        <h2 className="collapse__title">{title}</h2>
        <button
          type="button"
          className="collapse__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Fermer' : 'Ouvrir'} ${title}`}
        >
          <img src={chevron} alt="" className="collapse__chevron" />
        </button>
      </div>
      <div className="collapse__panel">
        <div className="collapse__content">
          <div className="collapse__inner">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
