import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Box } from '@material-ui/core'
import PostCardContent from './PostCardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
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
