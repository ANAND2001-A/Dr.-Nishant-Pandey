import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../../core/firebase/firebase.js';
import { logout } from '../../../core/firebase/authService.js';
import { ROUTES } from '../../../core/utils/constants.js';
import Button from '../../../core/components/ui/Button.jsx';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate(ROUTES.AUTH);
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'About Author', path: ROUTES.ABOUT_AUTHOR },
    { name: 'Book', path: ROUTES.BOOKS },
    { name: 'Gallery', path: ROUTES.GALLERY },
    { name: 'Blog', path: ROUTES.BLOG },
    { name: 'Contact', path: ROUTES.CONTACT, description: 'Get in touch' },
  ];

  const moreItems = [
    { name: 'Contact', path: ROUTES.CONTACT, description: 'Get in touch' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-card/95 backdrop-blur-md shadow-md border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-8">
        {/* Logo */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <h1 className="text-xl font-serif font-bold text-primary">Dr. Nishant Pandey</h1>
          {/* <p className="hidden sm:block text-xs text-muted-foreground -mt-1">
            Literary Excellence
          </p> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-muted/50 ${isActive(item.path)
                ? 'text-primary bg-muted/30 border-b-2 border-accent'
                : 'text-foreground hover:text-primary'
                }`}
            >
              {item.name}
            </Link>
          ))}

          {/* More Dropdown */}
          {/* <div className="relative group">
            <button className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200">
              More
              <svg
                className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {moreItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors hover:bg-muted/50 ${isActive(item.path)
                      ? 'text-primary bg-muted/30'
                      : 'text-foreground hover:text-primary'
                      }`}
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {auth.currentUser ? (
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </Button>
          ) : (
            <Link to={ROUTES.AUTH}>
              <Button className="bg-mint123 hover:bg-green-700 text-white">
                Signup
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-md transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        <div className="p-4 space-y-2">
          {[...navItems, ...moreItems].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                  ? 'text-primary bg-muted/30 border-l-4 border-accent'
                  : 'text-foreground hover:text-primary hover:bg-muted/50'
                }`}
            >
              <div>{item.name}</div>
              {item.description && (
                <div className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </div>
              )}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-border space-y-2">
            {auth.currentUser ? (
              <Button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-red-600 hover:bg-red-700 text-white w-full"
              >
                Logout
              </Button>
            ) : (
              <Link to={ROUTES.AUTH} onClick={() => setIsOpen(false)}>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                  Signup
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

    </header>
  );
}
