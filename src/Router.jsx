import { App } from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { createBrowserRouter } from 'react-router-dom';
import StuffPage from './Pages/StuffPage.jsx';

export const router = createBrowserRouter([
    {
      path: "/Portfolio",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/Portfolio",
          element: <HomePage />,
        },
        {
            path:"/Portfolio/stuff",
            element: <StuffPage />
        }
      ],
    },
  ]);