import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link,useNavigate } from 'react-router-dom';
import ChangeLanguage from './reusableUi/ChangeLanguage';
import { Button , Menu, MenuItem, styled } from '@mui/material';
import SelectCurrency from './reusableUi/SelectCurrency';
import logoImage from '../images/logo.png'
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from 'react-redux';
import { logoutTeacher } from '../redux/teacherSlice';
import {logoutParent} from '../redux/parentSlice'
import cookies from "js-cookie";
import {studentLogout} from '../redux/studentSlice'
import { useState } from 'react';

const drawerWidth = 240;

const ImageLogo = styled('img')({
    width:"110px",
    height:"50px"
})

function Navbar(props) {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const {teacher} = useSelector((state)=>state.teacher)
    const {parent} = useSelector((state)=>state.parent)
    const lang = cookies.get("i18next") || "en";
    const {student} = useSelector((state)=>state.student)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function handleTeacherLogout()
    {
        dispatch(logoutTeacher())
        navigate('/login')
    }

    function handleStudentLogout()
    {
        dispatch(studentLogout())
        navigate('/login')
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            <ImageLogo src={logoImage}/>
        </Typography>
        <Divider />
        <List>
            <ListItem  disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="" />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    /** teacher profile links */
    const teacherProfile = [{title:t('profile'),link:"/about"},{title:t('messages'),link:"/messages"}]
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
    <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
            <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' },paddingY:"10px" , alignItems:"center" }}>
                <Link to="/">
                    <ImageLogo src={logoImage}/>
                </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' },alignItems:"center",columnGap:"10px" }}>
                <Link to="">
                    <Box sx={{display:"flex",alignItems:"center",columnGap:"4px"}}>
                        <EmailOutlinedIcon sx={{fontSize:"15px"}}/>
                        <Typography sx={{fontSize:"14px"}}>moalemy@gmail.com</Typography>
                    </Box>
                </Link>
                <Link to="">
                    <Box sx={{display:"flex",alignItems:"center",columnGap:"4px"}}>
                        <PhoneIcon sx={{fontSize:"15px"}}/>
                        <Typography sx={{fontSize:"14px"}}>+123456789</Typography>
                    </Box>
                </Link>
                <ChangeLanguage lang={lang}/>
                <SelectCurrency/>
                {!teacher&&!parent&&!student&&
                <>
                    <Button sx={{ my: 2, color: 'white', display: 'block',textTransform:"capitalize",
                    padding:"1px 18px"}} variant="text" onClick={()=>navigate('/login')}>{t('login')}</Button>
                    <Button onClick={()=>navigate('/teacherRegister/step1')}
                    sx={{ my: 2, color: 'white', display: 'block',textTransform:"capitalize",
                    padding:"1px 13px" , backgroundColor:"#ffffff33" , fontSize:"14px" , height:"50px", borderRadius:"10px"}} variant="text"> 
                    {t('becometeacher')}
                    </Button>
                </>}
                {
                    teacher&&
                    <>
                        <Button color="Blue" variant="contained" 
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        >
                            {teacher?.firstName+" "+teacher?.lastName}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {
                                teacherProfile.map((item,link)=>
                                {
                                    return <MenuItem onClick={()=>{navigate(`/teacher${item.link}`);handleClose();}}>{item.title}</MenuItem>
                                })
                            }
                        </Menu>
                        <Button color="Blue" variant="contained" onClick={handleTeacherLogout}>{t('logout')}</Button>
                    </>
                }
                {
                    student&&
                    <>
                        <Button color="Blue" variant="contained" onClick={()=>navigate('/student/profile')}>{student?.name}</Button>
                        <Button color="Blue" variant="contained" onClick={handleStudentLogout}>{t('logout')}</Button>
                    </>
                }
                {
                    parent&&
                    <Button color="Blue" variant="contained" onClick={()=>dispatch(logoutParent())}>
                        {t('logout')}
                    </Button>
                }
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        <Box component="main" sx={{ paddingY: 0,width:"100%"}}>
            <Toolbar />
            {props.children}
        </Box>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;