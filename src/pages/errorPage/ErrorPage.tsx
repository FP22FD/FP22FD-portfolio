import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="mt-28 flex h-screen w-full flex-col items-center">
      <h1 className="mb-8 text-nowrap text-center text-2xl text-typography-default">An error has occurred</h1>
      <Link className="hover:text-typography-grey" to="/">
        Go back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
