import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Box, Grid, Container, Typography, Divider, ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    cover: {
        width: '100%',
        height: 250,
        objectFit: 'cover',
        zIndex: -1
    },
    card: {
        width: '100%',
        height: 250,
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        background: 'linear-gradient(0deg, rgba(0,0,0, 0.6) 30%, rgba(210,210,210, 0) 100%)'
    },
    title: {
        position: 'absolute',
        top: '50%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        position: 'absolute',
        fontSize: 14,
        fontWeight: 'normal',
    },
    divider: {
        backgroundColor: 'white',
        height: 2,
    },
}))

const Post3 = ({ item }) => {
    const classes = useStyles()

    return (
        <Box mb={2}>
            <ButtonBase 
            style={{width: '100%'}}
            to={`/works/${item.id}`}
            component={Link}
            >
            <Paper className={classes.card}>
                <img src={ item.image } alt={ item.title } className={ classes.cover } />
                <Container className={classes.title}>
                    <CardTitle item={item} />
                    <CardInfo item={item} />
                </Container>
            </Paper>
            </ButtonBase>
        </Box>
    )
}

const CardTitle = ({ item }) => {
    const classes = useStyles()

    return (
        <Box>
            <Typography align='center'>{ item.title }</Typography>
            <Box paddingX={5} mb={1}>
                <Divider className={classes.divider}/>
            </Box> 
        </Box>
    )
}

const CardInfo = ({ item }) => {
    const classes = useStyles()

    return (
        <Box>
            <Grid container className={classes.text}>
                <Grid item xs={3}>
                    <Typography align='center'>Год</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography align='center'>{ item.year }</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography align='center'>Город</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography align='center'>{ item.city }</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography align='center'>Автор</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography align='center'>{ item.author }</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Post3
