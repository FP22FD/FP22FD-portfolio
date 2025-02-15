import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { handleContactClick, handleScroll } from '../utils/scrollUtils';
import logo from '/assets/images/logo.svg';
import FlagGb from 'svg-country-flags/svg/gb.svg';
import FlagNo from 'svg-country-flags/svg/no.svg';

export function MenuDesktop() {
  const pageLinks = [
    { label: 'Home', to: '#home' },
    { label: 'Projects', to: '#projects' },
    {
      label: 'CV-en',
      href: '/FP22FD-portfolio/assets/cv/fernanda-cv-en.pdf',
      flag: <img src={FlagGb} className="h-4 w-6 object-cover" aria-hidden="true" />,
    },
    {
      label: 'CV-no',
      href: '/FP22FD-portfolio/assets/cv/fernanda-cv-no.pdf',
      flag: <img src={FlagNo} className="h-4 w-6 object-cover" aria-hidden="true" />,
    },
  ];

  return (
    <div className="hidden items-center justify-between md:flex">
      <div className="flex items-center text-primary-darkBlue">
        <Link to="#home" aria-label="Go to homepage">
          <img src={logo} alt="Website logo" className="h-auto w-8 duration-300 hover:rotate-[25deg] 2xl:w-9" />
        </Link>
        <h1 className="ml-4 text-xl font-bold 2xl:text-2xl">Fernanda Gomes</h1>
      </div>

      <div className="hidden items-center space-x-6 md:flex">
        {pageLinks.map(({ label, to, href, flag }) =>
          href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase text-primary-darkBlue"
              aria-label={`Open ${label}`}
            >
              {flag}
              <span className="text-sm font-medium hover-underline">{label}</span>
            </a>
          ) : (
            <NavLink
              key={label}
              to={to || ''}
              className="uppercase text-primary-darkBlue hover-underline"
              aria-label={`Go to ${label}`}
              onClick={(e) => to && handleScroll(e, to.slice(1))}
            >
              {label}
            </NavLink>
          ),
        )}
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
  );
}
