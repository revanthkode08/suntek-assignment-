import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Home from './COMPONENTS/Home.jsx'
import ProductsList from './COMPONENTS/ProductsList.jsx'
import ContactUs from './COMPONENTS/ContactUs.jsx'
import RootLayout from './COMPONENTS/RootLayout.jsx'
import Product from './COMPONENTS/Product.jsx'
function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"",
          element:<Home />
        },{
          path:"products",
          element:<ProductsList />
        },{
          path:"contact",
          element:<ContactUs />
        },{
          path:"product",
          element:<Product />
        }
      ]
    }
    
  ])

  return (
    <RouterProvider router={routerObj} />
  )
}

export default App
