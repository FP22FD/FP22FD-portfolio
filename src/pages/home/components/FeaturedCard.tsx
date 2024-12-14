import profile from '/src/assets/images/profile.png'
import linkedin from '/src/assets/icons/linkedin.svg'
import github from '/src/assets/icons/github.svg'

function FeaturedCard() {
  return (
    <div className="text-primary-darkBlue h-full w-full rounded lg:flex lg:flex-col xl:flex-row">
      <div className="relative flex h-full w-full gap-2 rounded bg-neutral-ofWhite lg:flex-col">
        <div className="relative h-full w-[60%] lg:w-[88%]">
          <div className="bg-primary-darkBlue absolute -left-0 top-0 h-[80%] w-[90%] object-contain"></div>
          <img
            src={profile}
            alt="Fernanda's profile image"
            className="relative z-10 m-4 w-full object-cover grayscale transition-all duration-300 hover:grayscale-0 hover:filter"
          />
        </div>

        <div className="flex h-full w-full flex-col place-content-center">
          <div className="md:text-md text-center text-sm sm:space-y-4 sm:p-4 md:text-base lg:mb-2">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl">
              Fernanda Gomes
            </h2>
            <p className="text-nowrap">Front-End Developer</p>
            <p>Oslo, Norway</p>
            <div className="mt-4 flex place-items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/fernandapereiragomes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn Icon"
                  className="h-6 w-6 transform transition-transform hover:scale-110 focus:scale-110 sm:h-10 sm:w-10 lg:mb-2 lg:h-14 lg:w-14"
                />
              </a>

              <a
                href="https://github.com/FP22FD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <img
                  src={github}
                  alt="GitHub Icon"
                  className="h-6 w-6 transform transition-transform hover:scale-110 focus:scale-110 sm:h-10 sm:w-10 lg:mb-2 lg:h-14 lg:w-14"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
