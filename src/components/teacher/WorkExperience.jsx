import { Box ,Button,Grid, InputLabel, TextField} from '@mui/material'
import React, { useEffect  , useImperativeHandle} from 'react'
import { useTranslation } from 'react-i18next';
import { useForm, useFieldArray } from 'react-hook-form';


function WorkExperience({Experience,setExperience },ref) {
    const {t} = useTranslation();

    const { register, handleSubmit, control , reset, getValues } = useForm({
        defaultValues: {
          // Default values for your fields
          items: Experience
        }
      });

      useEffect(()=>{
        reset({items:Experience})
      },[Experience])

      const { fields, append, remove} = useFieldArray({
        control,
        name: "items"
      });
    
    function addNewExperience()
    {
        append({jobTitle:"job",from:"2021",to:"2023",companyName:"Company"})
    }

    const onSubmit = (data) => {
        console.log(data);
      };

      useImperativeHandle(ref, () => ({
        r : getValues('items')
      }));

    return (
        <form style={{marginTop:"26px"}} onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map((item,index)=>
                {
                    return(
                        <Grid container key={Math.random()+'po1sws'} spacing={3} 
                        sx={{marginBottom:"20px",alignItems:"center"}}>
                            <>
                                <Grid item xs={3}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('job')}</InputLabel>
                                    <TextField type="text" fullWidth 
                                    {...register(`items.${index}.jobTitle`)} defaultValue={item?.jobTitle}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('from')}</InputLabel>
                                    <TextField type="number" fullWidth 
                                    {...register(`items.${index}.from`)} defaultValue={item?.from}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('to')}</InputLabel>
                                    <TextField type="number" fullWidth 
                                    {...register(`items.${index}.to`)} defaultValue={item?.to}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>{t('company')}</InputLabel>
                                    <TextField type="text" fullWidth 
                                    {...register(`items.${index}.companyName`)} defaultValue={item?.companyName}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button color="error" onClick={()=>remove(index)}>{t('delete')}</Button>
                                </Grid>
                            </>
                        </Grid> 
                    )
                })
            }
            <Button sx={{fontSize:"12px",marginTop:"4px"}} color="secondary" 
            onClick={()=>{addNewExperience()}}>
                {t('addExp')}
            </Button>
        </form>
    )
}
export default  React.forwardRef(WorkExperience);