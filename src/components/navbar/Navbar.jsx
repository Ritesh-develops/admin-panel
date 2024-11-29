import React from 'react'
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';



function Navbar() {
  const [theme,settheme] = useState(JSON.parse(localStorage.getItem("theme")))


  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }else document.documentElement.classList.remove('dark');
  },[theme])
  
  const handleThemeSwitcher = ()=>{
    settheme(theme === "dark"? 'Light' : 'dark')
  }

  

  return (
    <div>
        <div className='flex items-center pt-3 pl-3 justify-between pr-9'>
            <div className='flex bg-transparent  w-2/6 [height:40px] items-center justify-center'>
                <input type="text" className='outline-none h-full w-full items-center bg-transparent border-r-2 border-slate-300 justify-center placeholder:text-xl placeholder:pl-3' placeholder='search your product '/><SearchIcon className='text-slate-300'/>
            </div>
            <div className='text-slate-600 justify-between flex gap-6 items-center'>
           <button 
           type='button'
           onClick={handleThemeSwitcher}
           
           > {theme ==="dark"?<LightModeIcon  className='text-stone-300 hover:text-violet-500'/>  : <BedtimeOutlinedIcon className='hover:text-violet-700'/>}
            </button>
            <CloseFullscreenOutlinedIcon className='hover:text-violet-700'/>
            <NotificationsOutlinedIcon className='hover:text-violet-700'/>
            <ChatBubbleOutlineOutlinedIcon className='hover:text-violet-700'/>
            <ViewHeadlineOutlinedIcon className='hover:text-violet-700'/>
            <div className='[height:40px] w-10 pt-2 hover:ring-violet-500'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="profile" className='hover:ring-violet-600 rounded-full' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
