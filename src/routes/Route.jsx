import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Cart from "../components/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/login/Login";
import Blogs from "../pages/blogs/Blogs"
import Products from "../pages/products/Products";

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
            // element: <SingleProduct />,
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
            // element: <SingleBlog />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
