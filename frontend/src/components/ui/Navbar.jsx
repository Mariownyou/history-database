import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Content from './Content'
import Image from '../../static/background.png'
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Toolbar, Divider, SwipeableDrawer, Drawer, CssBaseline, AppBar, Hidden, IconButton } from '@material-ui/core';
import { Mail as MailIcon, Menu as MenuIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundImage: `url(${Image})`
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: `url(${Image})`
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  background: {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const page = useSelector(state => state.page)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const listItems = [{title: 'Работы', link: '/works'}, {title: 'Авторы', link: '/authors'}, {title: 'События', link: '/events'}]

  const drawer = (
    <div className={classes.background}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {listItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemIcon>{<MailIcon />}</ListItemIcon>
            <ListItemText primary={item.title} primaryTypographyProps={{variant: 'subtitle1'}}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" noWrap style={{fontWeight: 'bold', fontSize: 24}}>
            История
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onClick={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main>
        <div className={classes.toolbar} />
        <Content />
      </main>
    </div>
  );
}


export default ResponsiveDrawer;
