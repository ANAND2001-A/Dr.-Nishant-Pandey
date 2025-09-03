import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../core/utils/constants.js';
import Button from '../../../core/components/ui/Button.jsx';
import Icon from '../../../core/components/ui/AppIcon.jsx';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-paragraph)] py-[var(--spacing-xl)] text-[var(--color-paragraph)]">
      <div className="max-w-7xl mx-auto px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]">
        {/* Grid: Brand + Quick Links + Support */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-lg)]">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-[var(--spacing-md)] mb-[var(--spacing-md)]">
              {/* Logo */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-[var(--color-primary)]">
                  <rect width="40" height="40" rx="8" fill="currentColor" />
                  <path d="M12 10h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H12c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2z" fill="var(--color-secondary)" />
                  <path d="M16 14h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h6v2h-6v-2z" fill="var(--color-primary)" />
                </svg>
              </div>

              {/* Name + Description */}
              <div>
                <h3 className="text-lg font-bold text-[var(--color-primary)]">Dr. Nishant Pandey</h3>
                <p className="text-[var(--color-paragraph)] text-[var(--paragraph-small-font-size)] mb-[var(--spacing-sm)]">
                  Author & Speaker
                </p>
                <p className="text-[var(--color-paragraph)] text-[var(--paragraph-default-font-size)]">
                  Explore books, blogs, and insights from Dr. Nishant Pandey. Join a community of readers and learners.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-[var(--spacing-sm)] ml-14">
              <Button variant="ghost" size="sm" className="p-0 flex items-center justify-center">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-0 flex items-center justify-center">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-0 flex items-center justify-center">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-0 flex items-center justify-center">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-heading)] mb-[var(--spacing-sm)]">Quick Links</h4>
            <ul className="space-y-2 text-[var(--paragraph-small-font-size)]">
              {[
                { name: 'Home', path: ROUTES.HOME },
                { name: 'About Author', path: ROUTES.ABOUT_AUTHOR },
                { name: 'Book', path: ROUTES.BOOKS },
                { name: 'Gallery', path: ROUTES.GALLERY },
                { name: 'Blog', path: ROUTES.BLOG },
                { name: 'Contact', path: ROUTES.CONTACT },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-[var(--color-primary)] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[var(--color-heading)] mb-[var(--spacing-sm)]">Support</h4>
            <ul className="space-y-2 text-[var(--paragraph-small-font-size)]">
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-paragraph)] mt-[var(--spacing-lg)] pt-[var(--spacing-md)] flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-[var(--paragraph-small-font-size)] text-[var(--color-paragraph)]">
            © {new Date().getFullYear()} Dr. Nishant Pandey. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-4 md:mt-0">
            <span className="text-[var(--paragraph-small-font-size)] text-[var(--color-paragraph)]">Made with</span>
            <Icon name="Heart" size={16} className="text-red-500" />
            <span className="text-[var(--paragraph-small-font-size)] text-[var(--color-paragraph)]">for readers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
