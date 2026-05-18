import { useState } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo.jsx';
import { navItems } from '../data.js';

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip__inner">
          <a href="mailto:sales@icarusinternational.com">
            <Mail size={16} aria-hidden="true" />
            sales@icarusinternational.com
          </a>
          <a href="tel:+14164393300">
            <Phone size={16} aria-hidden="true" />
            +1 416-439-3300
          </a>
        </div>
      </div>

      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <BrandLogo onClick={closeMenu} />

          <nav className={open ? 'nav-menu nav-menu--open' : 'nav-menu'} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#quote" onClick={closeMenu}>
            Free Consultation
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
