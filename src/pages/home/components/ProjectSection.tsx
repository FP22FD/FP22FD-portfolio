import { useState } from 'react'
import ProjectCard from './ProjectCard'
import htmlIcon from '/src/assets/icons/htmlgreen.svg'
import cssIcon from '/src/assets/icons/cssgreen.svg'
import reactIcon from '/src/assets/icons/reactgreen.svg'
import javascriptIcon from '/src/assets/icons/javascriptgreen.svg'
import bootstrapIcon from '/src/assets/icons/bootstrapgreen.svg'
import tailwindIcon from '/src/assets/icons/tailwindgreen.svg'
import cypressIcon from '/src/assets/icons/cypressgreen.svg'
import testunitIcon from '/src/assets/icons/e2e.svg'
import typescriptIcon from '/src/assets/icons/typescriptgreen.svg'
import holidaze from '/src/assets/images/holidazebooking.png'
import online from '/src/assets/images/onlineshop.png'
import auction from '/src/assets/images/auctionhouse.png'

function ProjectsSection() {
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

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
            className={` ${
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            icons={(project.icons ?? []).filter(
              (icon): icon is { src: string; description: string } =>
                icon !== undefined,
            )}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            imageSrc={project.imageSrc}
            activeFilter={filter}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

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
    imageSrc: holidaze,
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
    imageSrc: online,
  },
  {
    title: 'AUCTION HOUSE',
    description:
      'This is Semester Project 2 assignment. Auction House is an online auction platform where users can list items for auction, place bids, and manage their profiles.',
    tags: ['javascript', 'bootstrap', 'cypress', 'html', 'css'],
    icons: [
      { src: javascriptIcon, description: 'Javascript' },
      { src: bootstrapIcon, description: 'Tailwind CSS' },
      { src: cypressIcon, description: 'Cypress Testing' },
      { src: htmlIcon, description: 'HTML' },
      { src: cssIcon, description: 'CSS' },
    ],
    githubLink:
      'https://github.com/FP22FD/Auction-House-SP2-CA/blob/main/README.md',
    websiteLink: 'https://fp22fd.github.io/Auction-House-SP2-CA/',
    imageSrc: auction,
  },
]
