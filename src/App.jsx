import React, { useEffect, useState } from 'react'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/home/Home.jsx'
import List from './pages/lists/List.jsx'
import New from './pages/new/New.jsx'
import { productInputs, userInputs } from './pages/Form/Form.js'
import Settings from './pages/Settings/Settings.jsx'



function App() {

  



    const router=createBrowserRouter([
        {
          path: '/',
          element: <Layout/>,
          children: [
            {
              path: '/',
              element: <Home/>
            },{
              path: 'orders',
              element: <List/>
            },{
              path: 'user',
              element: <New fields={userInputs} title="Add New User"/>
            },{
              path: 'product',
              element: <New fields={productInputs} title="Add New Product"/>
            },{
              path: 'settings',
              element: <Settings/>
            }
          ]
        }
      ])

  return (
    <>
  <div className='bg-white  dark:bg-neutral-800 dark:text-stone-300 dark:duration-200'>
  <RouterProvider router = {router}/>
  </div>
  
    </>
  )
}

export default App
