import { Link, NavLink } from 'react-router-dom'
import { PiTextAlignJustifyLight, PiXLight } from 'react-icons/pi'
import Button from './Button'
import logo from '../../../assets/images/logo.svg'

interface Props {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export function MenuMobile({ isMobileMenuOpen, toggleMobileMenu }: Props) {
  const pageLinks = [
    { label: 'Home', to: '#home' },
    { label: 'Projects', to: '#projects' },
  ]

  return (
    <div className="text-primary-darkBlue flex w-full items-center justify-between md:hidden">
      <div className="text-primary-darkBlue flex">
        <Link to="/" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Website logo"
            className="h-auto w-8 duration-300 hover:rotate-[25deg] 2xl:w-9"
          />
        </Link>
        <h1 className="ml-4 text-xl font-bold 2xl:text-2xl">Fernanda Gomes</h1>
      </div>

      <div className="flex justify-end py-4">
        <button
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <PiXLight className="h-8 w-8" aria-hidden="true" />
          ) : (
            <PiTextAlignJustifyLight className="h-8 w-8" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed right-0 top-0 z-40 h-full w-64 translate-x-0 transform bg-neutral-ofWhite shadow-md transition-transform duration-300"
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="flex justify-end p-6">
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <PiXLight
                className="text-primary-darkBlue h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="mx-auto mb-4 w-56 border-t border-neutral-default"></div>

          <nav className="my-8 flex flex-col items-center space-y-6">
            {pageLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className="uppercase hover-underline"
                aria-label={`Go to ${label}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto place-self-center pb-8">
            <Button
              type="button"
              label="CONTACT"
              variant="primary"
              ariaLabel="Contact me"
              size="large"
            />
          </div>
        </div>
      )}
    </div>
  )
}
