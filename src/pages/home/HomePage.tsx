import AboutAndSkills from './components/AboutAndSkills'
import FeaturedSection from './components/FeaturedSection'
import Skills from './components/Skills'

function HomePage() {
  return (
    <div className="grid grid-cols-6 gap-4 lg:grid-cols-12 xl:grid-rows-[auto_auto_auto]">
      <div
        id="home"
        className="col-span-12 flex h-full flex-col bg-orange-50 shadow-md lg:col-span-4"
      >
        <FeaturedSection />
      </div>

      <div
        id="about"
        className="col-span-12 flex h-full flex-col bg-white shadow-md lg:col-span-8"
      >
        <AboutAndSkills />
      </div>

      <div id="skills" className="col-span-6 hidden">
        <Skills />
      </div>

      <div id="projects" className="col-span-6 hidden"></div>
    </div>
  )
}

export default HomePage
