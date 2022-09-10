import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';



//for mock data wont need it later after integration
function createData(name, calories, fat, carbs, protein,sixth) {
  return { name, calories, fat, carbs, protein,sixth };
}

const rows = [
  createData('Alchemist', '09/02/22', '28/02/22', 250,'-', 'Requested'),
  createData('Alchemist', '09/02/22', '28/02/22', 250,'-', 'Requested'),
  createData('Alchemist', '09/02/22', '28/02/22', 250,'-', 'Requested'),
  createData('Alchemist', '09/02/22', '28/02/22', 250,'-', 'Requested'),
  createData('Alchemist', '09/02/22', '28/02/22', 250,'-', 'Requested'),
];



export default function UserRentalsPage() {
  return (
    <div>
      <Toolbar/>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book name</TableCell>
            <TableCell align="right">Issue Date</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Return Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.sixth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
