import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./src/App";
import ErrorPage from "./src/ErrorPage";
import Home from "./src/Routes/home/home";
import Store from "./src/Routes/store/store";
import Cart from "./src/Routes/cart/cart";
import Login from "./src/Routes/login/login";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "home", element: <Home /> },
        { path: "store", element: <Store /> },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },

        // default path
        { path: "/", element: <Navigate to="/home" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
