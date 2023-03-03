import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography,Dialog } from '@mui/material';
import AddStudyLevel from '../../components/admin/AddStudyLevel'
import {useLevels} from '../../hooks/useLevels'
import Loading from '../../components/Loading'
import { useTranslation } from 'react-i18next';

export default function StudyLevels() {
    const {t} = useTranslation()
    const columns = [
    { id: 'name_course', label:t('titleAr'), minWidth: 150 },
    { id: 'name_subject', label:t('titleEn'), minWidth: 150 }];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    const [openAddLevel,setOpenAddLevel] = useState(false)
    function handleClose()
    {
        setOpenAddLevel(false)
    }

    const {data,isLoading} = useLevels()
    const [levels,setLevels] = useState([])
    useEffect(()=>
    {
        if(!isLoading)
        {
            setLevels(data.data)
        }
    },[data])

    return (
    <AdminLayout>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginY:"30px"}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>{t('studylevels')}</Typography>
            <Button onClick={()=>setOpenAddLevel(true)}
            sx={{textTransform:"capitalize"}} variant="contained">{t('addStudyLevel')}</Button>
        </Box>
        {!isLoading?
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
                        {levels?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return <TableRow hover role="checkbox"  key={row.id+"demj"}>
                                <TableCell align='center'>
                                    {row.titleAR}
                                </TableCell>
                                <TableCell align='center'>
                                    {row.titleEN}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={levels?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </Paper>
        :
        <Loading/>
        }
        <Dialog open={openAddLevel} onClose={handleClose}>
            <AddStudyLevel handleClose={handleClose}/>
        </Dialog>
    </AdminLayout>
)
}