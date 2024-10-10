import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
<<<<<<< HEAD
import Home from "../pages/Home/Home";
import Cart from "../components/Cart/Cart";
import Products from "../pages/Products/Products";
import SingleProduct from "../pages/Products/SingleProduct";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
=======
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
>>>>>>> origin/blogs

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
<<<<<<< HEAD
        element: <Products />,
      },
      {
        path: "/:id",
        element: <SingleProduct />
      },
=======
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
>>>>>>> origin/blogs
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
<<<<<<< HEAD
=======
      {
        path: "/profile",
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>,
      },
>>>>>>> origin/blogs
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
