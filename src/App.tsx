import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/home/components/Layout";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/notFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
