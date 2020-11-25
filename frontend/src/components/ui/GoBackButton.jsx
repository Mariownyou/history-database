import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, Box, Typography } from '@material-ui/core'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const GoBackButton = () => {
    let history = useHistory();

    return (
        <Box>
            <Button
            color='secondary' 
            onClick={() => history.goBack()} 
            startIcon={<ArrowBackIosOutlinedIcon />}
            style={{ fontWeight: 'bold' }}
            >
                <Box pt={0.5}><Typography variant='h6'>Назад</Typography></Box>
                
            </Button>
        </Box>
    )
}

export default GoBackButton
