import { createBrowserRouter } from "react-router-dom"
import Blog from "../components/Blog"
import Courses from "../components/Courses"
import ErrorPage from "../components/ErrorPage"
import Faq from "../components/Faq"
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import Main from "../layout/Main"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/course',
          element: <Courses />,
        },
        {
          path: '/faq',
          element: <Faq/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ])
  
  export default router