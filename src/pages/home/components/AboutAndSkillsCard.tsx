import { useState } from 'react';
import Skills from './Skills';
import { PiXLight } from 'react-icons/pi';

function AboutAndSkillsCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const txtAbout = (
    <p className='inline'>
      I'm a motivated front-end developer based in Oslo, Norway, with a strong
      focus on responsive design, accessibility (WCAG 2.1, a11y), and
      user-friendly interfaces. My tech stack includes React, TypeScript, modern
      CSS (Tailwind, Bootstrap), semantic and accessible HTML, JavaScript, UI/UX
      principles, and CI/CD workflows. I have experience working with Figma
      prototyping and a keen interest in SEO, performance optimization, and
      usability testing.
    </p>
  );

  return (
    <div className='flex h-full flex-col justify-between rounded'>
      <div className='h-full rounded bg-neutral-ofWhite p-4 text-primary-darkBlue'>
        <h2 className='mb-2 text-xl font-bold'>ABOUT ME</h2>
        <p>Hi there!</p>
        {txtAbout}
        <button
          role='button'
          onClick={toggleModal}
          className='text-typography-grey no-underline hover:font-bold hover:text-primary-darkBlue focus:outline-none'
        >
          ...more
        </button>
      </div>

      <div className='mt-2 h-full place-content-end'>
        <Skills />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='max-h-[95vh] w-11/12 space-y-4 overflow-y-auto rounded bg-white p-4 pb-8 text-sm sm:w-5/6 md:w-3/4 md:text-base lg:w-8/12 lg:p-8'>
            <div className='flex justify-end'>
              <button
                onClick={toggleModal}
                className='text-primary-darkBlue hover:underline focus:outline-none'
              >
                <PiXLight className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
            <h2 className='mb-2 text-lg font-bold md:text-xl'>ABOUT ME</h2>
            <p>Hi there!</p>

            {txtAbout}

            <p>
              I enjoy focusing on the creative side of a project, believing that
              fonts, colors, and spaces should work harmoniously. I also
              appreciate the technical aspects of design, bringing ideas to life
              through code.
            </p>
            <p>
              I'm passionate about exploring a wide range of interests,
              including video editing, photography, OBS Studio, and YouTube
              content creation.
            </p>
            <p>
              In the past, I developed a love for creating handmade craft
              patterns, and today I still sell them through my
              <a
                href='https://www.etsy.com/it/shop/FernandasCraftRoom'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit My Etsy Store'
                className='highlight ml-2 hover:font-bold'
              >
                digital Store
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutAndSkillsCard;
