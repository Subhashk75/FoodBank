import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import DonateForm from './components/DonateForm'
import Profile from './components/Profile'
import Error from './components/Error'
import './index.css'
import Login from "./components/Login";
import SignUP from "./components/SignUp";
 // call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App/>, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Login />,
      },
      {
        path:"/signup",
        element:<SignUP/>,
      },
      {
         path:"/home",
         element:<Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path:"/donatefood",
        element:<DonateForm/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
