'use client';

import { useEffect, useRef, useState } from 'react';

import { getPageSettings } from '../../../../../sanity/sanity.query';
import { composeClassNames } from '../../utils';
import MenuItem from './MenuItem';

interface MenuProps {
  color?: string;
  isLandingPage?: boolean;
}

export default function Menu({ color = '', isLandingPage = false }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleMenuItemClicked = () => setIsOpen(false);
  return (
    <>
      <nav
        ref={menuRef}
        className={composeClassNames(
          `fixed left-0 top-0 z-30 mt-4 w-full pl-5 text-[25px] md:pl-6 md:text-3xl ${color}`,
          {
            '': !isOpen || !isLandingPage,
          }
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={composeClassNames('', {
            'text-white': isOpen || isLandingPage,
          })}
        >
          {isOpen ? 'X' : 'Menu'}
        </button>

        {isOpen && (
          <ul className="z-30 mt-2 space-y-2 text-white">
            <MenuItem
              path="/about"
              title="About"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/food-access"
              title="Food Access"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/fellowship"
              title="Fellowship"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/programming"
              title="Programming"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/grants"
              title="Grants"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/team"
              title="Team"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/jobs"
              title="Jobs"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/volunteer"
              title="Volunteer"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/support"
              title="Support"
              onItemClick={handleMenuItemClicked}
            />
            <MenuItem
              path="/contact"
              title="Contact"
              onItemClick={handleMenuItemClicked}
            />
          </ul>
        )}
      </nav>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(112,191,233, 0.85)',
            // background: overlayColor
            //   ? overlayColor
            //   : 'rgba(255, 255, 255, 0.8)',
            zIndex: 20,
          }}
        />
      )}
    </>
  );
}
