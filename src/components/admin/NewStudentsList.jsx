import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Avatar, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

    function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
    }

    const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    export default function NewStudentsList() {
    const {t} = useTranslation()
    return (
        <Paper sx={{marginY:"40px",padding:"20px"}}>
            <Typography sx={{marginBottom:"30px"}}>{t('studentlist')}</Typography>
            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell align='start'>{t('name')}</StyledTableCell>
                        <StyledTableCell align="start">{t('email')}</StyledTableCell>
                        <StyledTableCell align="start">{t('city')}</StyledTableCell>
                        <StyledTableCell align="start">{t('phone')}</StyledTableCell>
                        <StyledTableCell align="start">{t('birth')}</StyledTableCell>
                        <StyledTableCell align="start">{t('delete')}</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row" sx={{display:"flex",alignItems:"center",
                        columnGap:"12px"}}>
                            <Avatar alt={"yousef"}/> {"Yousef"}
                        </StyledTableCell>
                        <StyledTableCell align="start">yousef@gmail.com</StyledTableCell>
                        <StyledTableCell align="start">Gaza</StyledTableCell>
                        <StyledTableCell align="start">0592374719</StyledTableCell>
                        <StyledTableCell align="start">2002/9/3</StyledTableCell>
                        <StyledTableCell align="start">
                            <Button color="error" variant='contained' sx={{minWidth:"10px"}}>
                                <DeleteIcon/>
                            </Button>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
