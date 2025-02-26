import { useState } from 'react';
import ProjectCard from './ProjectCard';
import htmlIcon from '/assets/icons/htmlgreen.svg';
import cssIcon from '/assets/icons/cssgreen.svg';
import reactIcon from '/assets/icons/reactgreen.svg';
import javascriptIcon from '/assets/icons/javascriptgreen.svg';
import bootstrapIcon from '/assets/icons/bootstrapgreen.svg';
import tailwindIcon from '/assets/icons/tailwindgreen.svg';
import cypressIcon from '/assets/icons/cypressgreen.svg';
import testunitIcon from '/assets/icons/e2e.svg';
import typescriptIcon from '/assets/icons/typescriptgreen.svg';
import i18NextIcon from '/assets/icons/i18nextgreen.svg';
import i18nIcon from '/assets/icons/i18ngreen.svg';
import figmaIcon from '/assets/icons/figmagreen.svg';
import holidaze from '/assets/images/process/holidazebooking.png';
import holidazeDesign from '/assets/images/process/holidazeFigmaDS.png';
import holidazePrototype from '/assets/images/process/holidazeFigmaPRO.png';
import holidazePostman from '/assets/images/process/holidazePostman.png';
import holidazetest from '/assets/images/process/holidazeTest.png';
import online from '/assets/images/process/onlineshop.png';
import postmanOnline from '/assets/images/process/onlinePostman.png';
import onlinetest from '/assets/images/process/onlineTest.png';
import auction from '/assets/images/process/auctionhouse.png';
import auctionDesign from '/assets/images/process/auctionFigmaDS.png';
import auctionPrototype from '/assets/images/process/auctionFigmaPRO.png';
import publicSpace from '/assets/images/process/publicSpace.png';
import publicSpacePrototype from '/assets/images/process/publicSpaceFigmaPRO.png';
import publicSpaceDesign from '/assets/images/process/publicSpaceFigmaDS.png';
import publicSpaceComponent from '/assets/images/process/publicSpaceFigmaCOMP.png';

export const projects = [
  {
    title: 'PUBLIC SPACE',
    description:
      'This Figma prototype is a dashboard built within the 3 days available with React. It includes a basic i18n setup on the Overview page to showcase multilingual support.',
    tags: [
      'react',
      'typescript',
      'tailwind',
      'html',
      'css',
      'language support',
      'case study',
    ],
    icons: [
      { src: figmaIcon, description: 'Figma' },
      { src: reactIcon, description: 'React Framework' },
      { src: i18NextIcon, description: 'i18Next Library' },
      { src: i18nIcon, description: 'i18n Language Support' },
      { src: tailwindIcon, description: 'Tailwind CSS' },
      { src: typescriptIcon, description: 'Typescript' },
      { src: htmlIcon, description: 'HTML' },
      { src: cssIcon, description: 'CSS' },
    ],
    githubLink: 'https://github.com/FP22FD/dashboard-public-space',
    websiteLink: 'https://dashboard-public-space.netlify.app/',
    imageSrc: [
      { src: publicSpace, description: 'Project Implemented | Live Demo' },
      { src: publicSpaceDesign, description: 'Design System | Figma' },
      { src: publicSpacePrototype, description: 'Prototype | Figma' },
      { src: publicSpaceComponent, description: 'Reusable Components | Figma' },
    ],
  },
  {
    title: 'HOLIDAZE BOOKING',
    description:
      'This is Project Exam 2 assignment. Holidaze Booking is a booking site for hotels, cabins, etc., where registered users can book accommodations and manage their bookings, while admins can manage accommodations and bookings.',
    tags: ['react', 'typescript', 'tailwind', 'unit test', 'html', 'css'],
    icons: [
      { src: figmaIcon, description: 'Figma' },
      { src: reactIcon, description: 'React Framework' },
      { src: tailwindIcon, description: 'Tailwind CSS' },
      { src: testunitIcon, description: 'Unit Test' },
      { src: typescriptIcon, description: 'Typescript' },
      { src: htmlIcon, description: 'HTML' },
      { src: cssIcon, description: 'CSS' },
    ],
    githubLink:
      'https://github.com/FP22FD/holidaze-booking/blob/main/README.md',
    websiteLink: 'https://holidaze-booking-ca.netlify.app/',
    imageSrc: [
      { src: holidaze, description: 'Project Implemented | Live Demo' },
      { src: holidazeDesign, description: 'Design System | Figma' },
      { src: holidazePrototype, description: 'Prototype | Figma' },
      { src: holidazePostman, description: 'Postman | API' },
      { src: holidazetest, description: 'Playwright Tests | Unit Test' },
    ],
  },
  {
    title: 'ONLINE SHOP',
    description:
      'This is JavaScript Frameworks assignment. Online Shop is a React-based shopping cart application that allows users to add and remove items from their cart.',
    tags: ['react', 'typescript', 'tailwind', 'unit test', 'html', 'css'],
    icons: [
      { src: figmaIcon, description: 'Figma' },
      { src: reactIcon, description: 'React Framework' },
      { src: tailwindIcon, description: 'Tailwind CSS' },
      { src: testunitIcon, description: 'Unit Test' },
      { src: typescriptIcon, description: 'Typescript' },
      { src: htmlIcon, description: 'HTML' },
      { src: cssIcon, description: 'CSS' },
    ],
    githubLink: 'https://github.com/FP22FD/online-shop-CA/blob/main/README.md',
    websiteLink: 'https://onlineshop-ca.netlify.app/',
    imageSrc: [
      { src: online, description: 'Project Implemented | Live Demo' },
      { src: postmanOnline, description: 'Postman | API' },
      { src: onlinetest, description: 'Console | Unit Test' },
    ],
  },
  {
    title: 'AUCTION HOUSE',
    description:
      'This is Semester Project 2 assignment. Auction House is an online auction platform where users can list items for auction, place bids, and manage their profiles.',
    tags: ['javascript', 'bootstrap', 'cypress', 'html', 'css'],
    icons: [
      { src: figmaIcon, description: 'Figma' },
      { src: cypressIcon, description: 'Cypress Testing' },
      { src: javascriptIcon, description: 'Javascript' },
      { src: bootstrapIcon, description: 'Bootstrap' },
      { src: htmlIcon, description: 'HTML' },
      { src: cssIcon, description: 'CSS' },
    ],
    githubLink:
      'https://github.com/FP22FD/Auction-House-SP2-CA/blob/main/README.md',
    websiteLink: 'https://fp22fd.github.io/Auction-House-SP2-CA/',
    imageSrc: [
      { src: auction, description: 'Project Implemented | Live Demo' },
      { src: auctionDesign, description: 'Design System | Figma' },
      { src: auctionPrototype, description: 'Prototype | Figma' },
    ],
  },
];

function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section className='mt-16 w-full gap-2 text-right text-xs lg:text-sm'>
      <div className='mb-2 grid grid-cols-3 place-items-start gap-y-2 text-primary-darkBlue sm:grid-cols-4 sm:place-items-end md:flex md:place-content-end'>
        {[
          'all',
          'react',
          'typescript',
          'javascript',
          'tailwind',
          'bootstrap',
          'unit test',
          'cypress',
          'language support',
          'case study',
        ].map((tag) => (
          <button
            key={tag}
            className={`${
              filter === tag
                ? 'border-primary-darkBlue bg-primary-darkBlue font-semibold text-typography-white'
                : 'bg-neutral-ofWhite'
            } ml-2 text-nowrap rounded p-2 md:px-2 md:py-2`}
            onClick={() => setFilter(tag)}
          >
            {/* {tag === 'language support' ? tag : tag.toUpperCase()} */}
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xxl:grid-cols-3'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            icons={(project.icons ?? []).filter(
              (icon): icon is { src: string; description: string } =>
                icon !== undefined
            )}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            images={project.imageSrc}
            activeFilter={filter}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
