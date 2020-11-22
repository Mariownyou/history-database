import React from 'react'
import { Grid, Typography} from '@material-ui/core'

const GridItem = ({title, value}) => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography component="h5" variant="subtitle1" color="textSecondary">
                { title }
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography component="h5" variant="subtitle1">
                { value }
                </Typography>
            </Grid>
        </Grid>
    )
}

export default GridItem
