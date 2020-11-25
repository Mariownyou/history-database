import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const PostInfo = ({ item, classes }) => {

    const authors =  ( item.authors.map(author => (
        <Typography key={author.url} variant="subtitle1">{ author.name }</Typography>
    ))) 

    return (
        <Box pl={5}>
            <Grid container className={classes.text}>
                <Grid item xs={3}>
                    <Typography component="h5">Год</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="subtitle1">{ item.year }</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="h5">Город</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="subtitle1">{ item.city }</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="h5">{ item.authors > 2 ? ('Автор') : ('Авторы')}</Typography>
                </Grid>
                <Grid item xs={9}>
                   { authors }
                </Grid>
            </Grid>
        </Box>
    )
}

export default PostInfo
