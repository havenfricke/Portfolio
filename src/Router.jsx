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
    path: "/", 
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "websoftware", 
        element: <WebSoftwarePage />
      },
      {
        path: "gamedev",
        element: <GameDevPage />
      },
      {
        path: "3d",
        element: <ThreeDPage />
      },
      {
        path: "iot",
        element: <IoTPage />
      },
      {
        path: "join",
        element: <JoinPage />
      }
    ],
  },
]);