import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Featured() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-slate-400'>Total Revenue</h1>
        <MoreVertOutlinedIcon className='text-slate-400'/>
      </div>
      <div className='flex justify-center p-3 border-t-2 border-slate-300'>
          <div className='w-1/2 flex items-center justify-center '>
          <CircularProgressbar value={66} text={'66%'} />
          </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p>Total sales made today</p>
        <p className='text-4xl'>$420</p>
        <p className='text-slate-400 text-center'>Previous transactions processing. Last payments may not be included</p>
      </div>
      <div className='flex justify-between p-3'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-slate-400'>Target</p>
            <div className='flex '>
            <ExpandLessOutlinedIcon className='text-green-500'/><p className='text-green-500'>$12.4k</p>
         </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-slate-400'>Last Week</p>
            <div className='flex '>
            <KeyboardArrowDownOutlinedIcon className='text-red-600'/><p className='text-red-600'>$12.4k</p>
         </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-slate-400'>Last Month</p>
            <div className='flex '>
            <ExpandLessOutlinedIcon className='text-green-500'/><p className='text-green-500'>$12.4k</p>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
