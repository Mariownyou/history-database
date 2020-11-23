import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, Box } from '@material-ui/core'

const GoBackButton = () => {
    let history = useHistory();

    return (
        <Box>
            <Button color='secondary' onClick={() => history.goBack()}>Назад</Button>
        </Box>
    )
}

export default GoBackButton
