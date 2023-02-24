import React, { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';

const columns = [
    { id: 'Name', label: 'Name', minWidth: 150 },
    { id: 'Email', label: 'Email', minWidth: 150 },
    { id: 'Gender', label: 'Gender', minWidth: 150 },
    { id: 'Phone', label: 'Phone', minWidth: 150 },
    { id: 'View', label: 'View', minWidth: 150 },
    { id: 'Actions', label: 'Actions', minWidth: 150 }];

export default function TeachersApprove() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const teachers = [
        {
            name:"Yousef Abohani",
            gender:"male",
            phone:"0592374719",
            email:"yousefha2029@gmail.com"
        },
        {
            name:"Yousef Abohani",
            gender:"male",
            phone:"0592374719",
            email:"yousefha2029@gmail.com"
        },
        {
            name:"Yousef Abohani",
            gender:"male",
            phone:"0592374719",
            email:"yousefha2029@gmail.com"
        }
    ]

    return (
    <AdminLayout>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>Teachers Approve</Typography>
        </Box>
        <Paper sx={{ width: '100%',padding:"20px"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={"center"}
                            style={{ top: 57, minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    <TableBody>
                        {teachers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return <TableRow hover role="checkbox"  key={row.id+"demj"}>
                                <TableCell align='center'>
                                    {row.name || ''}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.email}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.gender || ''}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.phone || ''}
                                </TableCell>
                                <TableCell align='center'>
                                    <Button color="secondary">
                                        <VisibilityIcon/>
                                    </Button>
                                </TableCell>
                                <TableCell align='center'>
                                    <Button color="success">
                                        <DoneIcon/>
                                    </Button>
                                    <Button color="error">
                                        <ClearIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={teachers?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
    </AdminLayout>
)
}