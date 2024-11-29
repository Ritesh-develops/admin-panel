import React, { useState } from 'react'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({title, fields}) => {
const [fill,setfill]=useState("")

  return (
    <div className='p-5'>
      <div className='w-full shadow-xl p-5 rounded-xl text-xl text-slate-500'>
        {title}
      </div>
      <div className='shadow-xl flex flex-row rounded-xl p-5'>
        <div className='w-1/3 flex items-center justify-center pt-3'>
          <img src={fill? URL.createObjectURL(fill) : "https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg"} alt="profile photo" className='rounded-full w-1/2' />
        </div>
        <div className='w-2/3'>
          <form className='flex flex-col flex-wrap align-middle justify-center h-fit'>
          <div className='flex gap-5 items-center p-3'>
              <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className='cursor-pointer'/></label>
              <input type="file" id='file' className='hidden' onChange={e=>setfill(e.target.files[0])}/>
            </div>

            {
              fields.map((input)=>(
                <div className='flex flex-col p-3 gap-0' key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} className='w-3/6 h-9 placeholder:pl-3 outline-none bg-transparent focus:ring-2 focus:ring-violet-400 border-b-2 border-slate-400' />
            </div>
              ))
            }
            
           
            <div className='p-2 '>
            <button className='bg-violet-500 text-white rounded-xl px-3 py-2'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default New
