import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Blogs from "../pages/blogs/Blogs"
import Products from "../pages/products/Products";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import SingleProduct from "../components/singleProduct/SingleProduct";
import SingleBlog from "../components/singleBlog/SingleBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productId",
            element: <SingleProduct />,
          },
        ],
      },
      {
        path: "/blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
          },
          {
            path: ":blogId",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "/cart",
        element: <PrivateRoute>
          <Cart />
        </PrivateRoute>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>,
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
