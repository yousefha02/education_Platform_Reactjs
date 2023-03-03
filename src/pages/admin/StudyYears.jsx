import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Dialog, Typography } from '@mui/material';
import AddStudyYear from '../../components/admin/AddStudyYear';
import {useClasses} from '../../hooks/useClasses'
import Loading from '../../components/Loading'
import { useTranslation } from 'react-i18next';

export default function StudyYears() {
    const {t} = useTranslation()
    const columns = [
    { id: 'name_course', label: t('titleAr'), minWidth: 150 },
    { id: 'name_course', label: t('titleEn'), minWidth: 150 },
    { id: 'name_teacher', label: t('studylevel'), minWidth: 150 }];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    const [openAddYear,setOpenAddYear] = useState(false)
    function handleClose()
    {
        setOpenAddYear(false)
    }

    const {data,isLoading} = useClasses()
    const [classes,setClasses] = useState([])
    useEffect(()=>
    {
        if(!isLoading)
        {
            setClasses(data.data)
        }
        console.log(classes)
    },[data])

    return (
    <AdminLayout>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginY:"30px"}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>{t('studyyears')}</Typography>
            <Button onClick={()=>setOpenAddYear(true)}
            sx={{textTransform:"capitalize"}} variant="contained">{t('addstudyyear')}</Button>
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
                        {classes
                        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return <TableRow hover role="checkbox"  key={row.id+"demj"}>
                                <TableCell align='center'>
                                    {row.titleAR}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.titleEN}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.Level?.title}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={classes?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </Paper>
        :
        <Loading/>
        }
        <Dialog onClose={handleClose} open={openAddYear}>
            <AddStudyYear handleClose={handleClose}/>
        </Dialog>
    </AdminLayout>
)
}