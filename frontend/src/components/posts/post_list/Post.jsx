import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Box } from '@material-ui/core'
import PostCardContent from './PostCardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 200,
    // backgroundColor: '#C4C4C4'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
    objectFit: 'fill'
  },
}));

export default function MediaControlCard({ item }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box mb={2}>
      <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={item.image}
        title={item.title}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <PostCardContent item={item} />
          </CardContent>
        </div>
      </Card>
    </Box>
  );
}
