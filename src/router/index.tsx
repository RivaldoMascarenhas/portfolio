import { Home } from "@/app/pages/home";
import { Header } from "@/components/header";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
      },
    ],
  },
]);
