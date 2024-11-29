import React from 'react'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Widget({type}) {
  let data;

  //temporary data
  const amount = 100
  const diff = 20

  switch(type){
    case "user":
        data={
            title:"USER",
            isMoney:false,
            link:"See all users",
            icon: (
                <Person2OutlinedIcon  className='bg-red-400 bg-opacity-40 rounded-xl select-auto'/>
            )
        };
        break;
    case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"View my balance",
                icon: (
                    <MonetizationOnOutlinedIcon  className='bg-slate-500 bg-opacity-40 rounded-xl select-auto'/>
                )
            };
            break;
     case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"View all orders",
                    icon: (
                        <ShoppingCartOutlinedIcon className='bg-violet-400 bg-opacity-40 rounded-xl select-auto'/>
                    )
                };
                break;
    case "earnings":
                    data={
                        title:"EARNINGS",
                        isMoney:true,
                        link:"View net earnings",
                        icon: (
                            <AccountBalanceWalletOutlinedIcon  className='bg-green-400 bg-opacity-40 rounded-md select-auto'/>
                        )
                    };
                    break;
        default: 
        break;
  }

  return (
    <div className='flex w-1/4 justify-between shadow-xl rounded-xl'>
    <div className='flex flex-col p-5 gap-1'>
        <span>{data.title}</span>
        <span>{data.isMoney && "$"}{amount}</span>
        <span>{data.link}</span>
    </div>
    <div className='flex flex-col p-5 gap-7 items-center'>
        <div>
            <KeyboardArrowUpOutlinedIcon/>
            {diff}%
        </div>
        {data.icon}
    </div>
    </div>
  )
}

export default Widget
