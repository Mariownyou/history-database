import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const PostInfo = ({ item, classes }) => {
    return (
        <Box pl={5}>
            <Grid container className={classes.text}>
                <Grid item xs={3}>
                    <Typography component="h5" variant="subtitle1">Год</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>{ item.year }</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="h5" variant="subtitle1">Город</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>{ item.city }</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="h5" variant="subtitle1">Автор</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography>{ item.author }</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PostInfo
