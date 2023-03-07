import { Avatar, Box, Button, Container, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ParentAddStudent from '../../components/parent/ParentAddStudent';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function HomeParent() {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const {t} = useTranslation()
  
    return (
        <Navbar>
            <Container sx={{marginTop:"60px"}}>
                <Typography sx={{color:"#000000",fontWeight:"700",fontSize:"24px",marginBottom:"8px"}}>اهلا بك في اكاديمتنا</Typography>
                <Typography sx={{color:"#000000",fontWeight:"500",fontSize:"18px",marginBottom:"32px"}}>يسعدنا تسهيل عملية متابعة دراسة ابنائك من خلال اكاديميتنا </Typography> 
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={t('view_children')} {...a11yProps(0)} />
                    <Tab label={t('add')} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container>
                        <Grid item xs={12} md={4} lg={3} sx={{width:"100%"}}>
                            <Paper sx={{padding:"8px 6px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <Avatar alt={'Yousef'} src={`${process.env.REACT_APP_API}/images/`} 
                                sx={{width:"105px",height:"105px",fontSize:"42px"}}/>
                                <Typography sx={{fontWeight:"500",marginY:"10px",fontSize:"18px",minHeight:"50px",textAlign:"center"}}>الطالب : Yousef Abohani </Typography>
                                <Button onClick={()=>navigate(`/parent-dash/student/1`)}>مشاهدة</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ParentAddStudent/>
                </TabPanel>
            </Container>
        </Navbar>
    )
}
