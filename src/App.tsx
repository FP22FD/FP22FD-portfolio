import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load the Layout component
const Layout = lazy(() => import('./pages/home/components/Layout'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const ErrorPage = lazy(() => import('./pages/errorPage/ErrorPage'));
const PageNotFound = lazy(() => import('./pages/notFound/NotFound'));
const Hotjar = lazy(() => import('./pages/home/components/Hotjar'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading Layout...</div>}>
        <Routes>
          {/* Wrap Layout with Suspense */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="error" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>

      {/* Always render Hotjar in the background */}
      <Suspense fallback={null}>
        <Hotjar />
      </Suspense>
    </Router>
  );
}

export default App;
