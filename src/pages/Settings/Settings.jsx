import React, { useEffect, useState } from 'react'

function Settings() {
    const [Mode, setMode] = useState(JSON.parse(localStorage.getItem("theme")))

    useEffect(()=>{
        localStorage.setItem("theme", JSON.stringify(Mode))
    },[Mode])




  return (
    <div className='w-full h-screen p-5'>
        <div className='w-full flex justify-center items-center shadow-xl rounded-lg p-5 text-lg'>
            Always Turn On Website in : {" "} <select name="select" value={Mode} onChange={(e)=>{setMode(e.target.value)}} id="select" className='outline-violet-600 dark:bg-neutral-700'>
                <option value="dark" >Dark Mode</option>
                <option value="Light">Light Mode</option>
            </select>
        </div>
    </div>
  )
}

export default Settings
