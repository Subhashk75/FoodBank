import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import Footer from './components/Footer'
import DonateForm from './components/DonateForm'
import Profile from './components/Profile'
import Error from './components/Error'
import './index.css'
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
        element: <Body />,
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
