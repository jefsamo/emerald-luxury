import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import FAQ from "./FAQ";
import Home from "./Home";
import Form from "./play";

function App() {
  const Layout = () => {
    return (
      <>
        <Outlet />
        <FAQ />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/order",
          element: <Form />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
