import { Mail, MapPin, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo.jsx';
import { navItems } from '../data.js';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <BrandLogo footer />
          <p>
            Aviation parts, procurement, repair coordination, and AOG support for operators who need clear answers and dependable execution.
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul className="footer-list">
            <li>
              <MapPin size={17} aria-hidden="true" />
              <span>4409, UP Tower 77, Sheikh Zayed Road, Dubai Silicon Oasis, UAE</span>
            </li>
            <li>
              <MapPin size={17} aria-hidden="true" />
              <span>MERKEZ MAH. AKAR CAD. I TOVVERS BOMONTI NO: 3/23 SISLI / ISTANBUL - TURKEY</span>
            </li>
            <li>
              <Phone size={17} aria-hidden="true" />
              <a href="tel:+971502789383">+971-50-278 9383</a>
            </li>
            <li>
              <Mail size={17} aria-hidden="true" />
              <a href="mailto:info@icarusintl.com">info@icarusintl.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Capabilities</h3>
          <ul className="footer-links">
            {navItems.slice(1, 5).map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">Copyright © 2026. All Rights Reserved By Icarus International</div>
      </div>
    </footer>
  );
}
