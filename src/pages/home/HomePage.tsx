import AboutAndSkillsCard from './components/AboutAndSkillsCard'
import ContactSection from './components/Contact'
import FeaturedCard from './components/FeaturedCard'
import ProjectsSection from './components/ProjectSection'

function HomePage() {
  return (
    <div className="grid grid-cols-6 gap-4 lg:grid-cols-12 xl:grid-rows-[auto_auto_auto]">
      <div className="col-span-12 flex h-full flex-col shadow-md lg:col-span-4">
        <FeaturedCard />
      </div>

      <div className="col-span-12 flex h-full flex-col rounded bg-neutral-ofWhite shadow-md lg:col-span-8">
        <AboutAndSkillsCard />
      </div>

      <div id="projects" className="col-span-12">
        <ProjectsSection />
      </div>

      <div id="contact" className="col-span-12">
        <ContactSection />
      </div>
    </div>
  )
}

export default HomePage
