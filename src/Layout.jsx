import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className=' flex h-full w-full '>
      <div className=' dark:bg-neutral-800 dark:text-stone-300 dark:duration-200 flex-6 flex-col bg-white ml-0 border-r-2 border-slate-300'><Sidebar/></div>
     <div className='flex-1 flex-col'>
     <div className='[height:61.5px] dark:bg-neutral-800 dark:duration-200 dark:text-stone-300 bg-white border-b-2 border-slate-300'><Navbar/></div>
     <div className=''><Outlet/></div>
        </div> 
    </div>
  )
}

export default Layout
