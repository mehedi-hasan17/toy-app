import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Componets/Home";
import ToyDetails from "../Componets/ToyDetails";
import Loging from "../Componets/Loging";
import MyProfile from "../Componets/MyProfile";
import Register from "../Componets/Register";
import PriviteRouts from "../Provider/PriviteRouts";
import Notfount from "../Componets/Notfount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Loging />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "toy/:id",
        loader: () => fetch("/toyData.json"),
        element: (
          <PriviteRouts>
            <ToyDetails />
          </PriviteRouts>
        ),
      },
    ],
  },
  { path: "*", element: <Notfount /> },
]);
