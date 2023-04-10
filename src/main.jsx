import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/layout/Root'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import { loadFeaturesJobData } from './components/Loaders/loadFeaturesData'
import Details from './components/Details'
import Marks from './components/Marks'
import AppliedJob from './components/AppliedJob'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:loadFeaturesJobData
      },
      {
        path:"details/:jobId",
        element:<Details/>,
      },
      {
        path:"/marks",
        element:<Marks/>
      },
      {
        path:"/applied",
        element:<AppliedJob/>,
        loader:loadFeaturesJobData
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
