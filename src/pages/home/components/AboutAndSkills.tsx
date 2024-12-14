import SkillsCard from './Skills'

function AboutAndSkillsCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded">
      <div className="text-primary-darkBlue h-full space-y-4 rounded bg-neutral-ofWhite p-4">
        <h2 className="mb-2 text-xl font-bold">ABOUT ME</h2>
        <p>Hi there!</p>
        <p>
          I' m motivated front-end developer based in Oslo, Norway. My tech
          stack at work is Design, HTML, CSS, React, TypeScript, JavaScript
          Bootstrap, Tailwind, UI/UX, and Figma.
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
            className="highlight ml-2 hover:font-bold"
          >
            digital Store
          </a>
          .
        </p>
      </div>

      <div className="mt-2 h-full place-content-end">
        <SkillsCard />
      </div>
    </div>
  )
}

export default AboutAndSkillsCard
