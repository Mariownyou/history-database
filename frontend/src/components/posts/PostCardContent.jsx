import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'
import GridItem from '../ui/GridItem'


const PostCardContent = ({ item }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography 
                component="h5" 
                variant="subtitle1"
                align='center'
                style = {{fontWeight: 'bold'}}
                >
                { item.title }
                </Typography>
                <Divider />

            </Grid>
            <GridItem title="Автор" value={ item.author }/>
            <GridItem title="Год" value={ item.year }/>
            <GridItem title="Город" value={ item.city }/>
        </Grid>
    )
}

export default PostCardContent
