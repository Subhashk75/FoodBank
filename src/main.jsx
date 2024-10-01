import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/AboutSection/About.jsx'
import StackHolder from './components/stackHolder/StackHolder.jsx'
import DonateForm from './Page/DonatePage/DonateForm.jsx'
import Profile from './components/Profile'
import Error from './Page/ErrorPage/Error.jsx'
import RecentAddPost from './components/Recent Add Post/RecentAddPost.jsx';
import './index.css'
import AcceptFrom from './Page/AcceptFromPage/AcceptFrom.jsx'
import SignUP from "./Page/SigupPAge/SignUp.jsx";
import Login from './Page/LoginPage/Login.jsx';
import HomePage from './Page/HomePage/HomePage.jsx';
import BlogAndNew from './components/BlogSection/BlogAndNew.jsx';
import FQApage from './Page/FQAPage/FQApage.jsx';
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
        element: <HomePage/>,
      },
      {
        path:"/signup",
        element:<SignUP/>,
      }, {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/RecentAddPost",
        element:<RecentAddPost/>,
      },{
        path:"/FQA",
        element:<FQApage/>
      },

      {
        path: "/about",
        element: <About />,
      }, {
        path: "/AcceptFrom",
        element: <AcceptFrom />,
      },
      {
        path: "/BlogAndNew",
        element: <BlogAndNew/>,
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

