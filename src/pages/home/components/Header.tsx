import { useState } from 'react';
import { MenuMobile } from './MenuMobile';
import { MenuDesktop } from './MenuDesktop';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-neutral-ofWhite shadow-sm">
      <nav className="flex w-full px-6 md:p-5" aria-label="Main navigation">
        <div className="hidden w-full md:block">
          <MenuDesktop />
        </div>

        <div className="w-full md:hidden">
          <MenuMobile isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
