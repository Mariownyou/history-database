import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Box, Grid, Container, Typography, Divider, ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PostInfo from '../PostInfo'
import PostTitle from '../PostTitle'

const useStyles = makeStyles((theme) => ({
    cover: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        zIndex: -1
    },
    card: {
        width: '100%',
        height: 300,
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
                    <PostTitle item={item} classes={classes} />
                    <PostInfo item={item} classes={classes} />
                </Container>
            </Paper>
            </ButtonBase>
        </Box>
    )
}

export default Post3
