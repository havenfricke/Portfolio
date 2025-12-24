import { App } from './App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import JoinPage from './Pages/JoinPage.jsx';
import WebSoftwarePage from './Pages/WebSoftwarePage.jsx';
import GameDevPage from './Pages/GameDevPage.jsx';
import ThreeDPage from './Pages/ThreeDPage.jsx';
import IoTPage from './Pages/IoTPage.jsx';

export const router = createBrowserRouter([
    {
      path: "/Portfolio/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/Portfolio/",
          element: <HomePage />,
        },
        {
          path:"/Portfolio/websoftware",
          element: <WebSoftwarePage />
        },
        {
          path: "/Portfolio/gamedev",
          element: <GameDevPage />
        },
        {
          path: "/Portfolio/3d",
          element: <ThreeDPage />
        },
        {
          path: "/Portfolio/iot",
          element: <IoTPage />
        },
        {
          path:"/Portfolio/join",
          element: <JoinPage />
        }
      ],
    },
  ]);