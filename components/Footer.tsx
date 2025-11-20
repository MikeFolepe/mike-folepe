'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    tech: {
      en: 'Built with modern web technologies. Hosted on Vercel.',
      fr: 'Construit avec technologies web modernes. Hébergé sur Vercel.',
    },
  };

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-8 text-center text-[var(--color-text-secondary)] text-sm">
        <p>
          &copy; 2025 Mike Folepe. {content.rights[language]}
        </p>
        <p className="mt-2 text-xs">{content.tech[language]}</p>
      </div>
    </footer>
  );
}