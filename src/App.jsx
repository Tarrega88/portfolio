import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Skills from "./features/skills/Skills";
import People from "./features/people/People";
import Projects from "./features/projects/Projects";
import AboutMe from "./features/about/AboutMe";
import Contact from "./features/contact/Contact";
import Tools from "./features/tools/Tools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      // {
      //   path: "/about",
      //   element: <AboutMe />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
