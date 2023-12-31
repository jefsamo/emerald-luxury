import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";
import FAQ from "./FAQ";
import Home from "./Home";
import PlaceOrder from "./PlaceOrder";
import { SocialButton } from "./Whatsapp";

function App() {
  const Layout = () => {
    return (
      <>
        <br />
        <Outlet />
        <FAQ />
        <SocialButton />
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
          element: <PlaceOrder />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
