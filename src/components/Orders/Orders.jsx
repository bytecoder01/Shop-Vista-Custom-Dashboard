import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Orders.css';

function createData(orderId, customerName, status, trackingCode, details) {
  return { orderId, customerName, status, trackingCode, details };
}

const rows = [
  createData('1001', 'John Doe', 'Shipped', 'TRK12345', 'Details'),
  createData('1002', 'Jane Smith', 'Processing', 'TRK67890', 'Details'),
  createData('1003', 'Alice Johnson', 'Delivered', 'TRK54321', 'Details'),
  createData('1004', 'Bob Brown', 'Canceled', 'TRK09876', 'Details'),
  createData('1005', 'Charlie Davis', 'Shipped', 'TRK11223', 'Details'),
];

const styling = (status) => {
  switch (status) {
    case 'Shipped':
      return { color: 'green', backgroundColor: '#9CCC65', fontWeight: 'bold', padding: '5px 10px', borderRadius: '4px' };
    case 'Processing':
      return { color: '#ffffff', backgroundColor: '#FFB74D', fontWeight: 'bold', padding: '5px 10px', borderRadius: '4px' };
    case 'Delivered':
      return { color: '#ffffff', backgroundColor: '#64B5F6', fontWeight: 'bold', padding: '5px 10px', borderRadius: '4px' };
    case 'Canceled':
      return { color: 'red', backgroundColor: '#EF9A9A', fontWeight: 'bold', padding: '5px 10px', borderRadius: '4px' };
    default:
      return { padding: '5px 10px', borderRadius: '4px' };
  }
};

export default function Orders() {
  return (
    <div className="order">
      <h3>Order History</h3>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="left">Customer Name</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Tracking Code</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.orderId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell align="left">{row.customerName}</TableCell>
                <TableCell align="left">
                  <span className='status' style={styling(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left">{row.trackingCode}</TableCell>
                <TableCell align="left">
                  <span style={{ color: 'lightblue', cursor: 'pointer' }}>{row.details}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
