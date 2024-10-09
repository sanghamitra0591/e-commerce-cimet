import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Cart from "../componants/Cart/Cart";
import ProductsWrapper from "../pages/Products/ProductsWrapper";
import Products from "../pages/Products/Products";
import SingleProduct from "../pages/Products/SingleProduct";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

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
        element: <ProductsWrapper />,
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

      // {
      //   path: "/blogs",
      //   element: <BlogsWrapper />,
      //   children: [
      //     {
      //       index: true,
      //       element: <Blogs />,
      //       loader: () => fetchData(BLOGS_API),
      //     },
      //     {
      //       path: ":productId",
      //       element: <SingleBlog />,
      //     },
      //   ],
      // },
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
