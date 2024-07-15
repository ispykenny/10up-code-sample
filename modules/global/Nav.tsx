'use client';
import { Container, Logo } from '@/components';
import { useThemeSettings } from '@/providers';
import { MenuItemTypes } from '@/types';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface MenuProps {
  menuItems: MenuItemTypes;
  className?: string;
}

const Menu = ({ menuItems, className }: MenuProps) => {
  const param = usePathname();

  return (
    <nav className={cn(className)}>
      <ul>
        {menuItems.map((item) => {
          // fixes slugs from /about/ -> /about
          const cleanItemPath = item.path.replace(/\/$/, '') || '/';
          return (
            <li key={item.path}>
              <Link
                className={cn(param === cleanItemPath ? 'is-current-page' : '')}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export const Nav = ({ menuItems }: { menuItems: MenuItemTypes }) => {
  const { isMenuOpen, updateTheme } = useThemeSettings();

  return (
    <header>
      <Container>
        <Logo includeDisplayName asLink />
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          className={cn('menu-button', isMenuOpen ? 'is-open' : '')}
          onClick={() => {
            updateTheme('isMenuOpen', !isMenuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Menu menuItems={menuItems} className="menu-desktop" />
      </Container>
      {isMenuOpen && (
        <div className="menu-mobile">
          <Container>
            <Menu
              menuItems={menuItems}
              className={cn('menu-mobile-nav', isMenuOpen ? 'is-open' : '')}
            />
          </Container>
        </div>
      )}
    </header>
  );
};
