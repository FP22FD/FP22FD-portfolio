import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="mt-28 flex h-screen w-full flex-col items-center">
      <h1 className="mb-8 text-nowrap text-center text-2xl text-typography-default">
        Oops! You seem to be lost
      </h1>
      <Link className="hover:text-typography-grey" to="/">
        Go to home
      </Link>
    </div>
  )
}

export default PageNotFound
