import githubIcon from '/src/assets/icons/githubrounded.svg'
import webIcon from '/src/assets/icons/web.svg'

interface Icon {
  src: string
  description: string
}

interface Props {
  title: string
  description: string
  icons: Icon[]
  githubLink: string
  websiteLink: string
  imageSrc: string
  activeFilter: string
}

function ProjectCard({
  title,
  description,
  icons,
  githubLink,
  websiteLink,
  imageSrc,
}: Props) {
  return (
    <div className="text-primary-darkBlue flex w-full flex-col justify-between rounded bg-neutral-ofWhite p-4 shadow-lg">
      <div className="mb-4 flex h-full flex-col justify-between text-start">
        <div>
          <h2 className="mb-2 text-lg font-bold">{title}</h2>
          <p className="mb-4 text-sm">{description}</p>
        </div>

        <div className="flex flex-col items-end justify-end gap-1">
          <div className="mb-4 flex gap-4">
            {icons.map((icon, index) => (
              <div key={index} className="group relative">
                <img src={icon.src} alt="Icon" className="h-6 w-6" />
                <div className="absolute left-1/2 top-full z-10 hidden w-max -translate-x-1/2 rounded bg-neutral-default px-2 py-1 text-typography-grey opacity-0 transition-opacity duration-200 group-hover:block group-hover:opacity-100">
                  {icon.description}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            <a
              href={githubLink}
              className="flex items-center rounded border p-2 text-typography-grey hover:scale-105 hover:text-typography-default"
            >
              <img src={githubIcon} alt="GitHub" className="mr-2 h-6 w-6" />
              <span>View Code</span>
            </a>
            <a
              href={websiteLink}
              className="flex items-center rounded border p-2 text-typography-grey hover:scale-105 hover:text-typography-default"
            >
              <img src={webIcon} alt="Website" className="mr-2 h-6 w-6" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-fit w-full">
        <img
          src={imageSrc}
          alt={`Project Thumbnail ${title}`}
          className="w-full rounded object-contain"
        />
      </div>
    </div>
  )
}

export default ProjectCard
