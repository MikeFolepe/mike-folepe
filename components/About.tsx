'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function About() {
  const { language } = useLanguage();

  const content = {
    title: { en: 'About Me', fr: 'À Propos' },
    paragraphs: [
      {
        en: "I'm a software engineer specialized in system automation, network automation, integrations, and internal tooling. I focus on building reliable, scalable systems that solve real-world problems.",
        fr: "Je suis ingénieur logiciel spécialisé en automatisation de systèmes, automatisation réseau, intégrations et outils internes. Je me concentre sur la construction de systèmes fiables et évolutifs qui résolvent des problèmes concrets.",
      },
      {
        en: "I'm starting my PhD with the goal of developing deep technical expertise in AI systems and using it to support high-impact industrial and governmental projects. My research interests lie at the intersection of distributed systems, applied AI, and automation.",
        fr: "Je débute mon doctorat dans le but de développer une expertise technique approfondie en systèmes d'IA et de l'utiliser pour soutenir des projets industriels et gouvernementaux à fort impact. Mes intérêts de recherche se situent à l'intersection des systèmes distribués, de l'IA appliquée et de l'automatisation.",
      },
      {
        en: "I am also venturing into entrepreneurship: FoleTech Labs (software consulting for SMEs and public organizations) and MafHoney (artisanal honey brand). My long-term path is to work on high-stakes, complex technical problems and advise organizations at the intersection of software, automation, and applied AI.",
        fr: "Je me lance également dans l'entrepreneuriat : FoleTech Labs (conseil logiciel pour PME et organisations publiques) et MafHoney (marque de miel artisanal). Mon objectif à long terme est de travailler sur des problèmes techniques complexes à enjeux élevés et de conseiller des organisations à l'intersection du logiciel, de l'automatisation et de l'IA appliquée.",
      },
    ],
  };

  return (
    <section id="about" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {content.title[language]}
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          {content.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph[language]}</p>
          ))}
        </div>
      </div>
    </section>
  );
}