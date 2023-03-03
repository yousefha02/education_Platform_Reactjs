import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTranslation } from 'react-i18next';

export default function TeacherStepper({active}) {

    const {t} = useTranslation()

    const steps = [t('About'),t('Photo'), t('additionalInformation'),t('subjects'),
    t('resume'),t('availability'),t('Description'),t('Video')];

    return (
        <Box sx={{ width: '100%',marginTop:"10px"}}>
            <Stepper activeStep={active} sx={{flexWrap:"wrap",rowGap:"20px"}}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel sx={{columnGap:"4px"}}>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
    );
}
