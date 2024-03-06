import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./Routes/ErrorPage";
import Home from "./Routes/home/home";
import Store from "./Routes/store/store";
import Cart from "./Routes/cart/cart";
import Login from "./Routes/login/login";
import Detail from "./Routes/detail/detail";

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
        { path: "detail/:id", element: <Detail /> },

        // default path
        { path: "/", element: <Navigate to="/home" /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
