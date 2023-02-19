import React, { useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography,Dialog } from '@mui/material';
import AddStudyCurriculums from '../../components/admin/AddStudyCurriculums'

const columns = [
    { id: 'name_course', label: 'Title', minWidth: 150 },
    { id: 'name_teacher', label: 'Levels', minWidth: 150 }];

export default function StudyCurriculums() {
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

    return (
    <AdminLayout>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            <Typography sx={{fontSize:"20px",fontWeight:"500"}}>Study Curriculums</Typography>
            <Button onClick={()=>setOpenAddLevel(true)}
            sx={{marginBottom:"20px",textTransform:"capitalize"}} variant="contained">Add Study Curriculums</Button>
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
                        {[]?.courses
                        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return <TableRow hover role="checkbox"  key={row.id+"demj"}>
                                <TableCell align='center'>
                                    {row.title}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={[]?.courses?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Dialog open={openAddLevel} onClose={handleClose}>
                <AddStudyCurriculums handleClose={handleClose}/>
            </Dialog>
    </AdminLayout>
)
}