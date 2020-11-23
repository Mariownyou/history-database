import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
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
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appbar: {
      backgroundImage: `url(${Image})`
    },
}));

const Navbar = () => {
    const page = useSelector(state => state.page)
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <AppBar position='static' className={classes.appbar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' className={classes.title}>История</Typography>
                    <Typography>{ page }</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
