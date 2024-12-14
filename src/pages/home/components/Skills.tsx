import react from '/src/assets/icons/react.svg'
import javascript from '/src/assets/icons/javascript.svg'
import typescript from '/src/assets/icons/typescript.svg'
import tailwind from '/src/assets/icons/tailwind.svg'
import bootstrap from '/src/assets/icons/bootstrap.svg'
import sass from '/src/assets/icons/sass.svg'
import figma from '/src/assets/icons/figma.svg'
import html from '/src/assets/icons/html.svg'
import css from '/src/assets/icons/css.svg'
import cypress from '/src/assets/icons/cypress.svg'
import jest from '/src/assets/icons/jest.svg'
import vscode from '/src/assets/icons/vscode.svg'
import github from '/src/assets/icons/github.svg'
import git from '/src/assets/icons/git.svg'
import postman from '/src/assets/icons/postman.svg'
import wordpress from '/src/assets/icons/wordpress.svg'
import database from '/src/assets/icons/database.svg'
import netlify from '/src/assets/icons/netlify.svg'
import vite from '/src/assets/icons/vite.svg'
import vitest from '/src/assets/icons/vitest.svg'
import ux from '/src/assets/icons/ux.png'
import flywheel from '/src/assets/icons/flywheel.png'

function Skills() {
  return (
    <section className="text-primary-darkBlue rounded bg-neutral-ofWhite p-4">
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
          { src: figma, alt: 'Figma', label: 'Figma' },
          { src: vscode, alt: 'VS code', label: 'VS code' },
          { src: html, alt: 'HTML', label: 'HTML' },
          { src: css, alt: 'CSS', label: 'CSS' },
          { src: git, alt: 'Git', label: 'Git' },
          { src: github, alt: 'GitHub', label: 'GitHub' },
          { src: postman, alt: 'Postman', label: 'Postman' },
          { src: wordpress, alt: 'WordPress', label: 'WordPress' },
          { src: flywheel, alt: 'Flywheel', label: 'Local' },
          { src: ux, alt: 'UX-UI', label: 'UX - UI' },
          { src: database, alt: 'API', label: 'API' },
          { src: netlify, alt: 'Netlify', label: 'Netlify' },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded border p-2 text-center"
          >
            <img
              src={skill.src}
              alt={`icon ${skill.alt}`}
              className="mb-0 h-6 w-6 sm:h-8 sm:w-8 lg:mb-1"
            />
            <span className="text-xs">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
