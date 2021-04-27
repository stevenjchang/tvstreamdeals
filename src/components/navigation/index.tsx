import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import Logo from '../logo';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Home`,
    href: `/`,
  },
  {
    label: `Sports`,
    href: `/nba/042320bosbkn`,
  },
  {
    label: `The App`,
    href: `/`,
  },
  {
    label: `How It Works`,
    href: `/`,
  },
  {
    label: `Testimonials`,
    href: `/`,
  },
  {
    label: `Contact`,
    href: `/`,
  },
];

const secondaryLinks = [
  {
    label: `Contact sales`,
    href: `/`,
  },
  {
    label: `Log in`,
    href: `/`,
  },
  {
    label: `Get Started`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
    id="nav-menu-button"
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div id="nav-mobile-menu" className={tw(`absolute bg-white w-full`)} style={{ height: '100vh' }}>
    <div className={tw(``)}>
      {links.map((link: Link) => (
        <a
          href={link.href}
          className={tw(`text-gray-500 block px-3 py-2 text-base font-medium uppercase`)}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
    {/* <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div> */}
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav id="nav" className={tw(`md:flex sm:justify-start md:justify-center relative`)}>
      <div className={tw(`max-w-7xl mx-auto px-4`)}>
        <div className={tw(`flex items-center justify-between`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              {/* <img className={tw(`h-12 w-12`)} src="/logo.svg" alt="logo" width={48} height={48} /> */}

              <div className={tw('hidden md:block')}>
                <br />
                <Logo />
              </div>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(
                      `text-gray-300 hover:text-gray-600 px-3 py-2 rounded-md font-medium uppercase text-xs`,
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Button modifier="border-0 mr-2">Contact sales</Button>
              <Button modifier="border-0 mr-2">Log in</Button>
              <Button primary>Get started</Button>
            </div>
          </div> */}
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
