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
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body/>
       },
      {
        path: "/ContactUs",
        element: <ContactUs/>
       },
       {
         path: '/about',
         element : <About />
       },
       {
        path: '*',
        element : <Error />,
        errorElement: <Error/>
       }
    ]
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

