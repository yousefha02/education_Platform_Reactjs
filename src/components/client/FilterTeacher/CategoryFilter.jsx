import { Box, Typography } from '@mui/material'
import React from 'react'

export default function CategoryFilter({subject,handleCategory,category}) {
    return (
        <Box>
            <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#151313",textAlign:"center"}}>
                قم باختيار التخصص 
            </Typography>
            <Box sx={{marginTop:"30px"}}>
                <Box sx={{display:"flex",columnGap:"8px",alignItems:"center",flexWrap:"wrap"}}>
                {
                    subject.Subjects.length>0&&subject.Subjects.map((item,index)=>
                    {
                        return(
                            <Box key={index+'iq1'} sx={{color:category===item.id?"#151313":"#6D6D6D",borderRadius:"6px",
                            padding:"4px 10px",backgroundColor:category===item.id?'#005b8e4d':"#e7e7e7",cursor:"pointer"}}
                            onClick={()=>handleCategory(item.id)}>{item.titleAR}</Box>
                        )
                    })
                }
                </Box>
            </Box>
        </Box>
    )
}
