import html from '/src/assets/icons/html.png'
import css from '/src/assets/icons/css.png'
import javascript from '/src/assets/icons/javascript.png'
import figma from '/src/assets/icons/figma.png'
import vscode from '/src/assets/icons/vscode.png'
import github from '/src/assets/icons/github.png'
import postman from '/src/assets/icons/postman.png'
import wordpress from '/src/assets/icons/wordpress.png'
import trello from '/src/assets/icons/trello.png'
import flywheel from '/src/assets/icons/flywheel.png'
import api from '/src/assets/icons/api.png'
import ux from '/src/assets/icons/ux.png'

function Skills() {
  return (
    <section className="p-4">
      <h3 className="mb-4 text-left text-lg font-bold">SKILLS</h3>
      <div className="grid grid-cols-4 gap-2 text-nowrap sm:grid-cols-6">
        {[
          { src: html, alt: 'HTML', label: 'HTML' },
          { src: css, alt: 'CSS', label: 'CSS' },
          { src: javascript, alt: 'JavaScript', label: 'JavaScript' },
          { src: figma, alt: 'Figma', label: 'Figma' },
          { src: vscode, alt: 'VS Code', label: 'VS Code' },
          { src: github, alt: 'GitHub', label: 'GitHub' },
          { src: postman, alt: 'Postman', label: 'Postman' },
          { src: wordpress, alt: 'WordPress', label: 'WordPress' },
          { src: trello, alt: 'Trello', label: 'Trello' },
          { src: flywheel, alt: 'Flywheel', label: 'Local' },
          { src: api, alt: 'API', label: 'API' },
          { src: ux, alt: 'UX-UI', label: 'UX - UI' },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 text-center"
          >
            <img
              src={skill.src}
              alt={`icon ${skill.alt}`}
              className="mb-0 h-6 w-6 sm:h-8 sm:w-8 lg:mb-1"
            />
            <span className="text-xs font-medium">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
