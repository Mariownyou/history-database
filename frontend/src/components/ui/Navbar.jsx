import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Image from '../../static/background.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold'
    },
    appbar: {
      backgroundImage: `url(${Image})`
    }
}));

const Navbar = () => {
    const page = useSelector(state => state.page)
    const classes = useStyles();

    return (
        <Box mb={2} className={classes.root}>
            <AppBar position='static' className={classes.appbar}>
                <Toolbar>
                    <Typography variant='h6' color='inherit' className={classes.title}>История</Typography>
                    <Typography>{ page }</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
