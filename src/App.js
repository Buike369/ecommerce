
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./components/home"
import ProductPage from "./components/productPage"
import Login from "./components/login"
import Register from "./components/register"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />


      },
      {
        path: "/product",
        element: <ProductPage/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
