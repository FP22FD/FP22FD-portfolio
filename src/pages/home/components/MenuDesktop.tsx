import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import logo from '../../../assets/images/logo.svg'
import { handleContactClick, handleScroll } from '../utils/scrollUtils'

export function MenuDesktop() {
  const pageLinks = [
    { label: 'Home', to: '#home' },
    { label: 'Projects', to: '#projects' },
  ]

  return (
    <div className="justify-betwenn hidden items-center justify-between md:flex">
      <div className="text-primary-darkBlue flex">
        <Link to="#home" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Website logo"
            className="h-auto w-8 duration-300 hover:rotate-[25deg] 2xl:w-9"
          />
        </Link>
        <h1 className="ml-4 text-xl font-bold 2xl:text-2xl">Fernanda Gomes</h1>
      </div>

      <div className="hidden items-center space-x-4 md:flex">
        {pageLinks.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            className="text-primary-darkBlue uppercase hover-underline"
            aria-label={`Go to ${label}`}
            onClick={(e) => handleScroll(e, to.slice(1))}
          >
            {label}
          </NavLink>
        ))}
        <Button
          type="button"
          label="CONTACT"
          variant="primary"
          ariaLabel="contact-me"
          size="medium"
          onClick={handleContactClick}
        />
      </div>
    </div>
  )
}
