import React from 'react'
import { Box, Typography, Divider, Grid, Container, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PostInfo from '../PostInfo'
import PostTitle from '../PostTitle'

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        opacity: 0.5,
    },
    info: {
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
    },
    title: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    divider: {
        backgroundColor: 'white',
        height: 2,
    },
    box: {
        background: 'linear-gradient(0deg, rgba(0,0,0, 0.6) 30%, rgba(210,210,210, 1) 100%)'
    },
    size: {
        fontSize: 28
    }
}));

export const PostDetailMeta = ({ item }) => {
    const classes = useStyles();

    return (
        <Box style={{ background: `linear-gradient(180deg, rgba(0,0,0, 0.9) 90%, rgba(210,210,210, 1) 110%)` }}>
            <Box className={classes.info}>
                <img src={ item.image } alt={ item.title } className={ classes.image } />
                <Container className={classes.title}>
                    <PostTitle item={item} classes={classes} />
                    <PostInfo item={item} classes={classes} />
                    <Container>
                        <Container>
                            <Typography variant='caption' align='center' style={{ fontSize: 18 }}>
                              {item.reason ? (`"${item.reason}"`) : (null)}
                            </Typography>
                        </Container>
                    </Container>  
                </Container>
            </Box>
            <Divider className={classes.divider} /> 
            <Container style={{ color: 'white' }}>
                <Box my={2}>
                    <Typography variant='h5'>Всякая информация</Typography>
                </Box>
                <Typography>
                    { item.body }
                </Typography>
            </Container>
        </Box>
    )
}
export default PostDetailMeta
