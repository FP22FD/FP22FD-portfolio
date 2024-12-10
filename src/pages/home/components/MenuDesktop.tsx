import { NavLink } from 'react-router-dom'
import Button from './Button'

export function MenuDesktop() {
  const pageLinks = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Skills', to: '#skills' },
    { label: 'Projects', to: '#projects' },
  ]

  return (
    <div className="hidden items-center justify-end space-x-6 md:flex">
      {pageLinks.map(({ label, to }) => (
        <NavLink
          key={label}
          to={to}
          className="uppercase text-typography-default hover-underline"
          aria-label={`Go to ${label}`}
        >
          {label}
        </NavLink>
      ))}
      <Button
        type="button"
        label="CONTACT-ME"
        variant="primary"
        ariaLabel="contact-me"
        size="large"
      />
    </div>
  )
}
