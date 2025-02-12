import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './pages/home/components/Layout';
import Hotjar from './pages/home/components/Hotjar';
import HomePage from './pages/home/HomePage';

// Lazy load the Layout component
const ErrorPage = lazy(() => import('./pages/errorPage/ErrorPage'));
const PageNotFound = lazy(() => import('./pages/notFound/NotFound'));

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
