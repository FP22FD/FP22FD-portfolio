import { useState } from 'react';
import ProjectCard from './ProjectCard';
import htmlIcon from '/src/assets/icons/htmlgreen.svg';
import cssIcon from '/src/assets/icons/cssgreen.svg';
import reactIcon from '/src/assets/icons/reactgreen.svg';
import javascriptIcon from '/src/assets/icons/javascriptgreen.svg';
import bootstrapIcon from '/src/assets/icons/bootstrapgreen.svg';
import tailwindIcon from '/src/assets/icons/tailwindgreen.svg';
import cypressIcon from '/src/assets/icons/cypressgreen.svg';
import testunitIcon from '/src/assets/icons/e2e.svg';
import typescriptIcon from '/src/assets/icons/typescriptgreen.svg';
import holidaze from '/src/assets/images/process/holidazebooking.png';
import holidazeDesign from '/src/assets/images/process/holidazeFigmaDS.png';
import holidazePrototype from '/src/assets/images/process/holidazeFigmaPRO.png';
import holidazePostman from '/src/assets/images/process/holidazePostman.png';
import holidazetest from '/src/assets/images/process/holidazeTest.png';
import online from '/src/assets/images/process/onlineshop.png';
import postmanOnline from '/src/assets/images/process/onlinePostman.png';
import onlinetest from '/src/assets/images/process/onlineTest.png';
import auction from '/src/assets/images/process/auctionhouse.png';
import auctionDesign from '/src/assets/images/process/auctionFigmaDS.png';
import auctionPrototype from '/src/assets/images/process/auctionFigmaPRO.png';

export const projects = [
  {
    title: 'HOLIDAZE BOOKING',
    description:
      'This is Project Exam 2 assignment. Holidaze Booking is a booking site for hotels, cabins, etc., where registered users can book accommodations and manage their bookings, while admins can manage accommodations and bookings.',
    tags: ['react', 'typescript', 'tailwind', 'unit test', 'html', 'css'],
    icons: [
      { src: reactIcon, description: 'React Framework' },
      { src: tailwindIcon, description: 'Tailwind CSS' },
      { src: typescriptIcon, description: 'Typescript' },
      { src: testunitIcon, description: 'Unit Test' },
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
      { src: reactIcon, description: 'React Framework' },
      { src: tailwindIcon, description: 'Tailwind CSS' },
      { src: typescriptIcon, description: 'Typescript' },
      { src: testunitIcon, description: 'Unit Test' },
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
      { src: javascriptIcon, description: 'Javascript' },
      { src: bootstrapIcon, description: 'Bootstrap' },
      { src: cypressIcon, description: 'Cypress Testing' },
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
    <section className="mt-16 w-full gap-2 text-right text-xs lg:text-sm">
      <div className="mb-2 grid grid-cols-3 place-items-start gap-y-2 text-primary-darkBlue sm:grid-cols-4 sm:place-items-end md:flex md:place-content-end">
        {[
          'all',
          'react',
          'typescript',
          'javascript',
          'tailwind',
          'bootstrap',
          'unit test',
          'cypress',
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
            {tag.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xxl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            icons={(project.icons ?? []).filter(
              (icon): icon is { src: string; description: string } =>
                icon !== undefined,
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
