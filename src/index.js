import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Body from "./components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
   path: "/ContactUs",
   element: <ContactUs/>
  },
  {
   path: '*',
   element : <Error />,
   errorElement: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

