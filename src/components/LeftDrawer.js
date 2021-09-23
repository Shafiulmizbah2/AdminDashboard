import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  ItemColor: {
    backgroundColor: theme.palette.primary.main,
    padding: "1rem .5rem",
    color: theme.palette.background.paper,
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
    },
  },
  iconColor: {
    color: theme.palette.background.paper,
  },
  logocont: {
    padding: "1rem",
  },
  logo: {
    height: "auto",
    width: "auto",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  logout: {
    marginTop: "auto",
  },
}));

export default function LeftDrawer({ anchor, item }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
        <div className={classes.logocont}>
          <img
            className={classes.logo}
            src="https://shopkpr.s3.ap-south-1.amazonaws.com/Website%20images/shopkpr-personal/logo/logo_1.svg"
            alt="logo"
          />
        </div>
        <List>
          <ListItem button className={classes.ItemColor}>
            <ListItemIcon>
              <SupervisorAccountIcon className={classes.iconColor} />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Helps" />
          </ListItem>
        </List>
        {/* <Divider /> */}
        <List className={classes.logout}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
