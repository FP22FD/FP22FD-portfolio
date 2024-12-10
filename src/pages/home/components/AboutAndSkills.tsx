import Skills from './Skills'

function AboutAndSkills() {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-4 bg-neutral-white p-4">
        <h2 className="mb-2 text-xl font-bold">ABOUT ME</h2>
        <p>Hi!</p>
        <p>
          I recently completed the Front-End course at the Noroff Institute in
          Oslo, Norway. During the course, I focused on Design, HTML, CSS, and
          JavaScript, React, TypeScript, Bootstrap, Tailwind, UI/UX, and Figma.
        </p>
        <p>
          I enjoy focusing on the creative side of a project, believing that
          fonts, colors, and spaces should work harmoniously. I also appreciate
          the technical aspects of design, bringing ideas to life through code.
        </p>
        <p>
          In my spare time, you can find me working on handmade craft patterns I
          sell in my
          <a
            href="https://www.etsy.com/it/shop/FernandasCraftRoom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit My Etsy Store"
            className="highlight ml-2"
          >
            digital Store
          </a>
          .
        </p>
        <p>
          Feel free to contact me. I will try to respond as soon as possible.
        </p>
      </div>

      <div className="mt-2">
        <Skills />
      </div>
    </div>
  )
}

export default AboutAndSkills
