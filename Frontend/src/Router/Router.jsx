import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/shop/Menu";
import Signup from '../Compenents/Signup'
import Cartpage from "../Pages/shop/Cartpage";
import Modal from "../Compenents/Modal";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path : "/cart-page",
        element : <Cartpage/>
      }
    ],
  },
  {
    path : "/signup",
    element : <Signup />
  },
  {
    path : "/modal" ,
    element : <Modal/>
  }

]);

export default router;
