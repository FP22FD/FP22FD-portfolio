import profile from '/src/assets/images/profile.png'
import linkedin from '/src/assets/icons/linkedin.png'
import github from '/src/assets/icons/github.png'

function FeaturedSection() {
  return (
    <div className="h-full w-full bg-accent-orangeLight lg:flex lg:flex-col xl:flex-row">
      <div className="relative flex h-full w-full gap-2 bg-accent-orangeLight lg:flex-col">
        <div className="relative h-full w-[60%] lg:w-[88%]">
          <div className="absolute -left-0 top-0 h-[80%] w-[90%] bg-primary-blue object-contain"></div>
          <img
            src={profile}
            alt="Fernanda's profile image"
            className="relative z-10 m-4 w-full object-cover transition-all duration-300 hover:grayscale hover:filter"
          />
        </div>

        <div className="flex h-full w-full flex-col sm:place-content-center">
          <div className="text-center text-sm sm:space-y-4 sm:text-base md:text-lg lg:mb-2">
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

export default FeaturedSection