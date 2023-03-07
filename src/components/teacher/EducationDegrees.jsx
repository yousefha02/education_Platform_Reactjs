import { Box ,Button,Grid, InputLabel, TextField} from '@mui/material'
import React, { useEffect, useImperativeHandle } from 'react'
import { useTranslation } from 'react-i18next';
import { useForm  , useFieldArray} from 'react-hook-form';

function EducationDegrees({degrees,setDegrees},ref) {
    const {t} = useTranslation()

    const { register, handleSubmit, control , reset, getValues } = useForm({
        defaultValues: {
          // Default values for your fields
          items: degrees
        }
      });

      useEffect(()=>{
        reset({items:degrees})
      },[degrees])

      const { fields, append, remove} = useFieldArray({
        control,
        name: "items"
      });

    function addNewDegree()
    {
        append({UniversityName:"University",from:"2021",to:"2023",degree:"Degrees"})
    }

    useImperativeHandle(ref, () => ({
        r : getValues('items')
      }));

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                fields.map((item,index)=>
                {
                    return(
                        <Grid container key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <Grid item xs={3}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('InstitutionName')}</InputLabel>
                                <TextField defaultValue={item.UniversityName} fullWidth 
                                {...register(`items.${index}.UniversityName`)}/>
                            </Grid>
                            <Grid item xs={2}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                                <TextField type="number" defaultValue={item.from} fullWidth
                                {...register(`items.${index}.from`)}/>
                            </Grid>
                            <Grid item xs={2}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                                <TextField type="number" defaultValue={item.to} fullWidth
                                {...register(`items.${index}.to`)}/>
                            </Grid>
                            <Grid item xs={2}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('Degrees')}</InputLabel>
                                <TextField fullWidth defaultValue={item.degree}
                                {...register(`items.${index}.degree`)}/>
                            </Grid>
                            <Grid item xs={2}>
                                <Button color="error" onClick={()=>remove(index)}>{t('delete')}</Button>
                            </Grid>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary"
            onClick={addNewDegree}>{t('addDegree')}</Button>
        </Box>
    )
}
export default  React.forwardRef(EducationDegrees);