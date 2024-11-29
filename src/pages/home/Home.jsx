import React from 'react'
import Widget from '../../components/Widget/Widget'
import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
import Table from '../../components/Table/Table'


const Home = () => {


  return (
    <div>
        <div className='flex p-5 gap-6'>
      <Widget type='user'/>
      <Widget type="order"/>
      <Widget type="earnings"/>
      <Widget type="balance"/>
        </div>

        <div className="charts flex w-full p-5 gap-6">
           <div className='w-2/6 shadow-xl rounded-xl p-5'><Featured /></div> 
            <div className='w-4/6 shadow-xl rounded-xl p-5'><Chart/></div>
        </div>

       <div className="w-full p-5 shadow-xl rounded-xl ">
        Latest Transactions
        <Table />
       </div>
    
    </div>
  )
}

export default Home
