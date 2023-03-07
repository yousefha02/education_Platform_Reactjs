import { Box ,Button,Grid, InputLabel, TextField} from '@mui/material'
import React, {  useEffect , useImperativeHandle} from 'react'
import { useTranslation } from 'react-i18next';
import { useForm, useFieldArray } from 'react-hook-form';


function ProfessionalCertificates({setCertificates,certificates},ref) {

    const {t} = useTranslation()

    const { register, handleSubmit, control , reset, getValues } = useForm({
        defaultValues: {
          // Default values for your fields
          items: certificates
        }
      });

      useEffect(()=>{
        reset({items:certificates})
      },[certificates])


      const { fields, append, remove} = useFieldArray({
        control,
        name: "items"
      });


    function addNewCertificates()
    {
        append({name:"Institution",from:"2021",to:"2023",subject:"Subject"})
    }

    
    useImperativeHandle(ref, () => ({
        r : getValues('items')
      }));

    return (
        <Box sx={{marginBottom:"26px"}}>
            {
                fields.map((item,index)=>
                {
                    return <Grid container  key={index+'po1'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                    <Grid item xs={3}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('InstitutionName')}</InputLabel>
                        <TextField defaultValue={item.name} fullWidth 
                        {...register(`items.${index}.name`)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                        <TextField type="number" defaultValue={item.from} fullWidth
                        {...register(`items.${index}.from`)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                        <TextField type="number" defaultValue={item.to} fullWidth
                        {...register(`items.${index}.to`)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('subject')}</InputLabel>
                        <TextField fullWidth defaultValue={item.subject}
                        {...register(`items.${index}.subject`)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button color="error" onClick={()=>remove(index)}>{t('delete')}</Button>
                    </Grid>
                    </Grid>
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary"
            onClick={addNewCertificates}>{t('addCer')}</Button>
        </Box>
    )
}

export default  React.forwardRef(ProfessionalCertificates);