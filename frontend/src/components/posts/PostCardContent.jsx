import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'


const PostCardContent = ({ item }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography 
                component="h5" 
                variant="subtitle1"
                >
                { item.title }
                </Typography>
                <Divider />

            </Grid>
            <Grid item xs={6}>
                <Typography component="h5" variant="subtitle1">
                Год
                </Typography>
                <Typography component="h5" variant="subtitle1">
                Автор
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography component="h5" variant="subtitle1">
                {item.year}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                {item.author_info.name}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default PostCardContent
