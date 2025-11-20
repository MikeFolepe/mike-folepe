'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Mail } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    title: { en: 'Get In Touch', fr: 'Me Contacter' },
    subtitle: {
      en: 'Open to research opportunities, consulting projects, and collaborations',
      fr: 'Ouvert aux opportunités de doctorat, projets de conseil et collaborations',
    },
    downloadCV: { en: 'Download Full Resume', fr: 'Télécharger CV Complet' },
    contacts: [
      {
        icon: Mail,
        label: 'davyfolepe70@gmail.com',
        href: 'mailto:davyfolepe70@gmail.com',
      },
      {
        icon: () => <span className="text-2xl">💼</span>,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/mikefolepe',
      },
      {
        icon: () => <span className="text-2xl">🐙</span>,
        label: 'GitHub',
        href: 'https://github.com/mikefolepe',
      },
      {
        icon: () => <span className="text-2xl">𝕏</span>,
        label: 'Twitter',
        href: 'https://twitter.com/mikefolepe',
      },
    ],
  };

  return (
    <section id="contact" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {content.title[language]}
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
          {content.subtitle[language]}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {content.contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 text-center hover:-translate-y-1 hover:border-[var(--color-primary)] transition-all"
              >
                <div className="flex justify-center mb-2">
                  <Icon size={32} />
                </div>
                <span className="font-medium">{contact.label}</span>
              </a>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition-all"
          >
            {content.downloadCV[language]}
          </a>
        </div>
      </div>
    </section>
  );
}