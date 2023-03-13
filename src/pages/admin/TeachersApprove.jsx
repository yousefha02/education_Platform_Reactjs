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
import { useTranslation } from 'react-i18next';
import {useWaitingTeachers} from '../../hooks/useWaitingTeachers'
import Loading from '../../components/Loading'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useSnackbar} from 'notistack'

export default function TeachersApprove() {
    const {closeSnackbar,enqueueSnackbar} = useSnackbar()
    const {token,teacher} = useSelector((state)=>state.admin)
    const {t} = useTranslation()
    const {data,isLoading} = useWaitingTeachers(token)
    const [teachers,setTeachers] = useState([])
    useEffect(()=>
    {
        if(data?.data)
        {
            setTeachers(data.data)
        }
    },[data])

    const columns = [
        { id: 'Name', label: t('name'), minWidth: 150 },
        { id: 'Email', label: t('email'), minWidth: 150 },
        { id: 'Gender', label: t('gender'), minWidth: 150 },
        { id: 'Phone', label: t('phone'), minWidth: 150 },
        { id: 'View', label: t('view'), minWidth: 150 },
        { id: 'Actions', label: t('actions'), minWidth: 150 }];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    async function acceptTeacher(id)
    {
        closeSnackbar()
        const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/accept/${id}`,{
            method:"POST",
            headers:{
                "Authorization":token,
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        enqueueSnackbar("تم قبول المعلم",{variant:"success",autoHideDuration:8000})
        filterTeachers(id)
    }

    async function rejectTeacher(id)
    {
        closeSnackbar()
        const response = await fetch(`${process.env.REACT_APP_API_KEY}api/v1/admin/reject/${id}`,{
            method:"POST",
            headers:{
                "Authorization":token,
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        enqueueSnackbar("تم رفض المعلم",{variant:"error",autoHideDuration:8000})
        filterTeachers(id)
    }

    function filterTeachers(id)
    {
        const filteredTeachers = teachers.filter(teacher=>teacher.id.toString()!==id.toString())
        setTeachers(filteredTeachers)
    }

    return (
    <AdminLayout>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px",
        marginTop:"40px"}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>{t('teachersapprove')}</Typography>
        </Box>
        {
        !isLoading?
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
                        {teachers.length>0&&teachers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return <TableRow hover role="checkbox"  key={row.id+"demj"}>
                                <TableCell align='center'>
                                    {row.firstName + " " + row.lastName || ''}
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
                                        <DoneIcon onClick={()=>acceptTeacher(row.id)}/>
                                    </Button>
                                    <Button color="error" onClick={()=>rejectTeacher(row.id)}>
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
                    count={teachers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </Paper>
        :
        <Loading/>
        }
    </AdminLayout>
)
}