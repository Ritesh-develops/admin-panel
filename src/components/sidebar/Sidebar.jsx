import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className=''>
      <Link to={"/"}>
      <div className='flex w-full pb-3 pt-3 pl-3 pr-3 text-center align-middle justify-center text-3xl text-violet-700  border-b-2 border-slate-300 font-medium'>
            rjamasterstudios
      </div>
      </Link>
      <div className='w-full dark:text-stone-300'><span>
        <ul className='flex flex-col pt-4 text-xl w-full text-slate-500 cursor-pointer'>
            <p className='text-slate-400 text-xs uppercase pl-3'>main</p>
            <Link to={'/'}>
            <li className='mb-5 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><DashboardIcon className='text-violet-700 pr-1'/>Dashboard</li>
            </Link>
            
            <p className='text-slate-400 text-xs uppercase pl-3'>lists</p>
            <Link to={"/user"}>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full' ><PersonOutlineIcon className='text-violet-700 pr-1'/>Users</li>
            </Link>
           
            <Link to={'/product'}>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><InventoryIcon className='text-violet-700 pr-1'/>Products</li>
            </Link>
            
            <Link to={"/orders"}>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><ShoppingBagIcon className='text-violet-700 pr-1'/>Orders</li>
            </Link>
            
            <li className='mb-5 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><DeliveryDiningIcon className='text-violet-700 pr-1'/>Delivery</li>
            <p className='text-slate-400 text-xs uppercase pl-3'>useful</p>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><ShowChartIcon className='text-violet-700 pr-1'/>Stats</li>
            <li className='mb-5 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><NotificationsIcon className='text-violet-700 pr-1'/>Notification</li>
            <p className='text-slate-400 text-xs uppercase pl-3'>service</p>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><HealthAndSafetyIcon className='text-violet-700 pr-1'/>System Health</li>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><BookIcon className='text-violet-700 pr-1'/>Logs</li>
            <Link to={'/settings'}>
            <li className='mb-5 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><SettingsIcon className='text-violet-700 pr-1'/>Settings</li>
            </Link>
            
            <p className='text-slate-400 text-xs uppercase pl-3'>user</p>
            <li className='mb-1 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><AccountCircleIcon className='text-violet-700 pr-1'/>Profile</li>
            <li className='mb-5 pl-4 flex hover:bg-violet-300 rounded items-end h-full'><LogoutIcon className='text-violet-700 pr-1'/>Logout</li>
        </ul>
        </span></div>
      <div>color options</div>
    </div>
  )
}

export default Sidebar
