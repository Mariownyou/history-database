import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, Box } from '@material-ui/core'
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
            >Назад</Button>
        </Box>
    )
}

export default GoBackButton
