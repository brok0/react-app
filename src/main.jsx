import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./routes/root";
import ErrorPage from "./pages/error-page";
import AllMetups from "./pages/AllMeetups";
import NewMetups from "./pages/NewMeetups";
import Favourites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "all-meetups",
    element: <AllMetups />,
  },
  {
    path: "new-meetups",
    element: <NewMetups />,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
