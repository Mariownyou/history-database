import React from 'react'
import { Box, Typography, Divider, Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    image: {
        width: 160,
        height: 160,
        objectFit: 'cover'
    }
}));

export const PostDetailMeta = ({ item }) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography align='center' variant='h6'>{ item.title }</Typography>
            <Divider />
            <Box m={2}>
            <Grid container alignItems="center">
                <Grid item xs={6}>
                    <img className={ classes.image } src={ item.image } />
                </Grid>
                <Grid item xs={6}>
                    <Typography align='center'>{ item.year }</Typography>
                    <Typography align='center'>{ item.author_info.name }</Typography>
                    <Typography align='center'>{ item.author_info.name }</Typography>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}
export default PostDetailMeta