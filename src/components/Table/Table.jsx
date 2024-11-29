import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
 {
    id: 11413155,
    product: "Acer Nitro 5",
    customer: 'John Smith',
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
 },
 {
    id: 11413156,
    product: "Playstation 5",
    customer: 'Madhumista',
    date: "4 April",
    amount: 1000,
    method: "Cash on Delivery",
    status: "Approved",
 },
 {
    id: 11413157,
    product: "Macbook air M-3",
    customer: 'Babli',
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
 },
 {
    id: 11413159,
    product: "Samsung Galaxy S21FE",
    customer: 'Ritesh',
    date: "29 September",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
 },
 {
    id: 11413158,
    product: "IPhone-14",
    customer: 'Durgesh',
    date: "3 October",
    amount: 1295,
    method: "UPI",
    status: "Approved",
 },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className='dark:bg-neutral-800'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className='dark:text-stone-300'>Tracking Id</TableCell>
            <TableCell className='dark:text-stone-300' >Product</TableCell>
            <TableCell className='dark:text-stone-300'>Customer</TableCell>
            <TableCell className='dark:text-stone-300'>Date</TableCell>
            <TableCell className='dark:text-stone-300'>Amount</TableCell>
            <TableCell className='dark:text-stone-300'>Payment Method</TableCell>
            <TableCell className='dark:text-stone-300'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='dark:text-stone-300' component="th" scope="row">
                {row.id}
              </TableCell >
              <TableCell className='dark:text-stone-300' >{row.product}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.customer}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.customer}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.customer}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.date}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.amount}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.method}</TableCell>
              <TableCell className='dark:text-stone-300' >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}