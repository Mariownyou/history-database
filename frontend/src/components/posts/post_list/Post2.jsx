import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Box, Grid, Container } from '@material-ui/core'
import PostCardContent from './PostCardContent'

const useStyles = makeStyles((theme) => ({
    cover: {
        width: '100%'
    }
}))

const Post2 = ({ item }) => {
    const classes = useStyles();

    return (
        <Box mb={2}>
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <img src={ item.image } alt={ item.title } className={ classes.cover } />
                    </Grid>
                    <Grid item xs={12}>
                        <Container>
                            <PostCardContent item={item} />
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Post2
