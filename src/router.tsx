import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
    ],
  },
]);

export default router;
