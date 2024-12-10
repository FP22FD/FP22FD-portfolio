import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="grid min-h-screen grid-cols-12 grid-rows-[min-content_1fr_min-content]">
      <Header />
      <main className="col-span-10 col-start-2 mt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
