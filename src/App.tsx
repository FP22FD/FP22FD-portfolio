import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./pages/home/components/Layout'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const ErrorPage = lazy(() => import('./pages/errorPage/ErrorPage'));
const PageNotFound = lazy(() => import('./pages/notFound/NotFound'));
const Hotjar = lazy(() => import('./pages/home/components/Hotjar'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hotjar />

        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="error" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
