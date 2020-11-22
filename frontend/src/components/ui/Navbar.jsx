import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box mb={2} className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' color='inherit' className={classes.title}>Нереальная История</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
