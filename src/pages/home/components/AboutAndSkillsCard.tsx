import Skills from './Skills';

function AboutAndSkillsCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded">
      <div className="h-full space-y-4 rounded bg-neutral-ofWhite p-4 text-primary-darkBlue">
        <h2 className="mb-2 text-xl font-bold">ABOUT ME</h2>
        <p>Hi there!</p>
        <p>
          I'm motivated front-end developer based in Oslo, Norway, with a strong focus on resposnive design,
          accessibility (WCAG 2.1, a11y), and user-friendly interfaces. My tech stack includes React, TypeScript, modern
          CSS (Tailwind, Bootstrap), semantic and accessible HTML, JavaScript, UI/UX principles, and CI/CD workflows. I
          have experience working with Figma prototyping and a keen interest in SEO, performance optimization, and
          usability testing.
        </p>
        <p>
          I enjoy focusing on the creative side of a project, believing that fonts, colors, and spaces should work
          harmoniously. I also appreciate the technical aspects of design, bringing ideas to life through code.
        </p>

        <p>
          I'm passionate about exploring a wide range of interests, including SEO, video editing, photography, OBS
          Studio, and YouTube content creation.
        </p>
        <p>
          In the past I developed a love for creating handmade craft patterns, and today I still sell them through my
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
        <Skills />
      </div>
    </div>
  );
}

export default AboutAndSkillsCard;
