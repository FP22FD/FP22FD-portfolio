import react from '/assets/icons/react.svg';
import javascript from '/assets/icons/javascript.svg';
import typescript from '/assets/icons/typescript.svg';
import tailwind from '/assets/icons/tailwind.svg';
import bootstrap from '/assets/icons/bootstrap.svg';
import sass from '/assets/icons/sass.svg';
import hotjar from '/assets/icons/hotjar.svg';
import storybook from '/assets/icons/storybook.svg';
import figma from '/assets/icons/figma.svg';
import html from '/assets/icons/html.svg';
import css from '/assets/icons/css.svg';
import cypress from '/assets/icons/cypress.svg';
import jest from '/assets/icons/jest.svg';
import vscode from '/assets/icons/vscode.svg';
import github from '/assets/icons/github.svg';
import git from '/assets/icons/git.svg';
import npm from '/assets/icons/npm.svg';
import postman from '/assets/icons/postman.svg';
import wordpress from '/assets/icons/wordpress.svg';
import database from '/assets/icons/database.svg';
import sql from '/assets/icons/sql.svg';
import netlify from '/assets/icons/netlify.svg';
import vite from '/assets/icons/vite.svg';
import vitest from '/assets/icons/vitest.svg';
import ux from '/assets/icons/ux.png';
import flywheel from '/assets/icons/flywheel.png';
import i18Next from '/assets/icons/i18next.svg';
import vue3 from '/assets/icons/vue.svg';
import i18n from '/assets/icons/i18n.svg';
import w3c from '/assets/icons/w3c.svg';
import accessibility from '/assets/icons/a11y.svg';

function Skills() {
  return (
    <section className="rounded bg-neutral-ofWhite p-4 text-primary-darkBlue">
      <h3 className="mb-4 text-left text-lg font-bold">SKILLS</h3>
      <div className="grid grid-cols-3 gap-2 text-nowrap sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-10">
        {[
          { src: react, alt: 'React', label: 'React' },
          { src: javascript, alt: 'JavaScript', label: 'JavaScript' },
          { src: typescript, alt: 'Typescript', label: 'TypeScript' },
          { src: tailwind, alt: 'Tailwind', label: 'Tailwind' },
          { src: bootstrap, alt: 'Bootstrap', label: 'Boostrap' },
          { src: sass, alt: 'Sass', label: 'Sass' },
          { src: cypress, alt: 'Cypress', label: 'Cypress' },
          { src: jest, alt: 'Jest', label: 'Jest' },
          { src: vitest, alt: 'Vitest', label: 'Vitest' },
          { src: vite, alt: 'Vite', label: 'Vite' },
          { src: hotjar, alt: 'Hotjar', label: 'Hotjar' },
          { src: figma, alt: 'Figma', label: 'Figma' },
          { src: vscode, alt: 'VS code', label: 'VS code' },
          { src: html, alt: 'HTML', label: 'HTML' },
          { src: css, alt: 'CSS', label: 'CSS' },
          { src: git, alt: 'Git', label: 'Git' },
          { src: github, alt: 'GitHub', label: 'GitHub' },
          { src: npm, alt: 'NPM', label: 'NPM' },
          { src: postman, alt: 'Postman', label: 'Postman' },
          { src: wordpress, alt: 'WordPress', label: 'WordPress' },
          { src: flywheel, alt: 'Flywheel', label: 'Local' },
          { src: ux, alt: 'UX-UI', label: 'UX - UI' },
          { src: w3c, alt: 'W3C', label: 'WCAG 2.1' },
          { src: accessibility, alt: 'Accessibility', label: 'a11y' },
          { src: database, alt: 'API', label: 'API' },
          { src: netlify, alt: 'Netlify', label: 'Netlify' },
          { src: i18n, alt: 'i18n', label: 'i18n' },
          { src: i18Next, alt: 'i18Next', label: 'i18Next' },
          { src: vue3, alt: 'Vue 3', label: 'Vue 3' },
          { src: sql, alt: 'SQL', label: 'SQL' },
          { src: storybook, alt: 'Storybook', label: 'Storybook' },
        ].map((skill, index) => (
          <div key={index} className="flex flex-col items-center rounded border p-2 text-center">
            <img src={skill.src} alt={`icon ${skill.alt}`} className="mb-0 h-6 w-6 sm:h-8 sm:w-10 lg:mb-1" />
            <span className="text-[10px] xxl:text-xs">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
