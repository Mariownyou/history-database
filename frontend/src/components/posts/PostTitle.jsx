import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'

const PostTitle = ({ item, classes }) => {
    return (
        <Box>
            <Typography align='center' className={classes.size}>{ item.title }</Typography>
            <Box paddingX={5} mb={1}>
                <Divider className={classes.divider}/>
            </Box> 
        </Box>
    )
}

export default PostTitle
