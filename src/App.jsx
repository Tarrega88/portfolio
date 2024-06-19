import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import Skills from "./features/skills/Skills";
import Projects from "./features/projects/Projects";
import Contact from "./features/contact/Contact";

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
        path: "/projects",
        element: <Projects />,
      },
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
