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
import { Link } from 'react-router-dom';
import ChangeLanguage from './reusableUi/ChangeLanguage';
import { Button , styled } from '@mui/material';
import SelectCurrency from './reusableUi/SelectCurrency';
import logoImage from '../images/logo.png'
const drawerWidth = 240;

const ImageLogo = styled('img')({
    width:"110px",
    height:"50px"
})

function Navbar(props) {
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            التعليم
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
            {/* <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                Education
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } , alignItems:"center" }}>
                <ImageLogo src={logoImage}/>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' },alignItems:"center",columnGap:"10px" }}>
                <Link to="">
                    <Box sx={{display:"flex",alignItems:"center",columnGap:"4px"}}>
                        <EmailOutlinedIcon sx={{fontSize:"15px"}}/>
                        <Typography sx={{fontSize:"14px"}}>yousef@gmail.com</Typography>
                    </Box>
                </Link>
                <Link to="">
                    <Box sx={{display:"flex",alignItems:"center",columnGap:"4px"}}>
                        <PhoneIcon sx={{fontSize:"15px"}}/>
                        <Typography sx={{fontSize:"14px"}}>+999 5999999</Typography>
                    </Box>
                </Link>
                <ChangeLanguage/>
                <SelectCurrency/>
                <Button sx={{ my: 2, color: 'white', display: 'block',textTransform:"capitalize",
                padding:"1px 18px"}} variant="text">تسجيل الدخول</Button>
                <Button sx={{ my: 2, color: 'white', display: 'block',textTransform:"capitalize",
                padding:"1px 18px" , backgroundColor:"#ffffff33" , fontSize:"12px" , height:"50px", borderRadius:"10px"}} variant="text">انضم لطاقم المدرسين
                </Button>
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
        <Box component="main" sx={{ paddingY: 3,width:"100%"}}>
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