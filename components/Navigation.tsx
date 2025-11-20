
'use client';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: { en: 'About', fr: 'À propos' } },
    { href: '#expertise', label: { en: 'Expertise', fr: 'Expertise' } },
    { href: '#projects', label: { en: 'Projects', fr: 'Projets' } },
    { href: '#ventures', label: { en: 'Ventures', fr: 'Entreprises' } },
    { href: '#research', label: { en: 'Research', fr: 'Recherche' } },
    { href: '#blog', label: { en: 'Blog', fr: 'Blog' } },
    { href: '#contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[var(--color-surface)]/90 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-semibold text-[var(--color-text)]">
            Mike Folepe
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm"
                >
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex gap-0 border border-[var(--color-border)] rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 text-sm transition-all ${language === 'en'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--color-text-secondary)]'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-2 text-sm transition-all ${language === 'fr'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--color-text-secondary)]'
                  }`}
              >
                FR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[var(--color-text)]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}