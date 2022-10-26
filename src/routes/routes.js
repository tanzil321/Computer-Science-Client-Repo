import { createBrowserRouter } from "react-router-dom"
import Blog from "../components/Blog"
import CheckOut from "../components/CheckOut"
import Courses from "../components/Courses"
import DisplayCourses from "../components/DisplayCourses"
import ErrorPage from "../components/ErrorPage"
import Faq from "../components/Faq"
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import Main from "../layout/Main"
import PrivateRoute from "./PrivateRoute"

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
          loader:({params})=>{
            return fetch('https://computer-science-server.vercel.app')
          },
          element: <Courses/>,
        },
        {
          path: '/categories/:id',
          loader:({params})=>{
            return fetch(`https://computer-science-server.vercel.app/categories/${params.id}`)
          },
          element: <DisplayCourses/>,
        },
        {
          path: '/checkout/:id',
          loader:({params})=>{
            return fetch(`https://computer-science-server.vercel.app/categories/${params.id}`)
          },
          element:(
            <PrivateRoute>
                <CheckOut/>
            </PrivateRoute>
          ),
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