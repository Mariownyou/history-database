import React from 'react'
import { Typography, Grid, Divider, Button } from '@material-ui/core'
import GridItem from '../../ui/GridItem'
import { Link } from 'react-router-dom'



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
            <GridItem title="Автор" value={ item.author } link={`/author/${ item.author }`}/>
            <GridItem title="Год" value={ item.year } link={`/year/${ item.year }`}/>
            <GridItem title="Город" value={ item.city } link={`/city/${ item.city }`}/>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Button size="small" color="primary" component={Link} to={`/works/${ item.id }`}>
                Читать
                </Button>
            </Grid>
        </Grid>
    )
}

export default PostCardContent
