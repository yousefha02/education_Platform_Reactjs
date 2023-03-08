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
import { useTranslation } from 'react-i18next';
import {useTenStudents} from '../../hooks/useTenStudents'
import { useSelector } from 'react-redux';
import Loading from '../Loading';

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
    const {token} = useSelector((state)=>state.admin)
    const {data,isLoading} = useTenStudents(token)
    
    return (
        <>
            {
            !isLoading
            ?
            <Paper sx={{marginY:"40px",padding:"20px"}}>
                <Typography sx={{marginBottom:"30px"}}>{t('studentlist')}</Typography>
                <TableContainer>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align='start'>{t('name')}</StyledTableCell>
                            <StyledTableCell align="start">{t('email')}</StyledTableCell>
                            <StyledTableCell align="start">{t('country')}</StyledTableCell>
                            <StyledTableCell align="start">{t('phone')}</StyledTableCell>
                            <StyledTableCell align="start">{t('birth')}</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                        data?.data.length>0&&data?.data.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row" sx={{display:"flex",alignItems:"center",
                            columnGap:"12px"}}>
                                <Avatar alt={row.name} src={`${process.env.REACT_APP_API_KEY}images/${row.image}`}/>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="start">{row.email}</StyledTableCell>
                            <StyledTableCell align="start">{row.location}</StyledTableCell>
                            <StyledTableCell align="start">{row.phoneNumber}</StyledTableCell>
                            <StyledTableCell align="start">{row.dateOfBirth}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            :
            <Loading/>
            }
        </>
    );
}
