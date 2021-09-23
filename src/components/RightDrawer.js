import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import { Avatar } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useHistory, useLocation } from "react-router-dom";

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
  active: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary,
  },
  avaterColor: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.background.paper,
  },
  itemwrapper: {
    padding: ".5rem",
  },
  topList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    marginTop: "auto",
  },
  bottomlist: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem 1rem 1rem 1rem",
  },
  bottomlistItem: {
    width: "2rem",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bottomText: {
    fontSize: "9px",
  },
}));

export default function RightDrawer() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        {/* <div className={classes.toolbar} /> */}
        <ListItem button className={classes.topList}>
          <Avatar alt="page" variant="square" src="/page.png" />
          <Typography variant="subtitle2" color="textPrimary">
            MANAGEMENT
          </Typography>
          <PermIdentityIcon color="secondary" fontSize="small" />
        </ListItem>

        <div className={classes.itemwrapper}>
          <Typography variant="body1" color="textPrimary">
            ManageGroups
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Add,edit,delete,users,groups and roles
          </Typography>
        </div>
        <List>
          <ListItem
            button
            onClick={() => history.push("/dash-board/admin/manage-user")}
          >
            <Avatar
              variant="rounded"
              className={
                location.pathname === "/dash-board/admin/manage-user"
                  ? classes.active
                  : classes.avaterColor
              }
            >
              01
            </Avatar>
            <div className={classes.itemwrapper}>
              <Typography variant="body1" color="textPrimary">
                MANAGE USERS
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Let's you manage users
              </Typography>
            </div>
          </ListItem>

          <ListItem
            button
            onClick={() => history.push("/dash-board/admin/manage-groups")}
          >
            <Avatar
              variant="rounded"
              className={
                location.pathname === "/dash-board/admin/manage-groups"
                  ? classes.active
                  : classes.avaterColor
              }
            >
              02
            </Avatar>
            <div className={classes.itemwrapper}>
              <Typography variant="body1" color="textPrimary">
                MANAGE GROUPS
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Let's you manage groups
              </Typography>
            </div>
          </ListItem>

          <ListItem
            button
            onClick={() => history.push("/dash-board/admin/manage-roles")}
          >
            <Avatar
              variant="rounded"
              className={
                location.pathname === "/dash-board/admin/manage-roles"
                  ? classes.active
                  : classes.avaterColor
              }
            >
              01
            </Avatar>
            <div className={classes.itemwrapper}>
              <Typography variant="body1" color="textPrimary">
                MANAGE ROLES
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Let's you manage roles
              </Typography>
            </div>
          </ListItem>
        </List>
        {/* <Divider /> */}
        <div className={classes.bottom}>
          <Typography variant="button" color="textPrimary">
            Quick links
          </Typography>
          <div className={classes.bottomlist}>
            <ListItem button className={classes.bottomlistItem}>
              <Avatar src="/logo512.png" />
              <Typography className={classes.bottomText}>PRODUCTS</Typography>
              <Typography className={classes.bottomText}>CTRL+ALT+P</Typography>
            </ListItem>
            <ListItem button className={classes.bottomlistItem}>
              <Avatar src="/logo512.png" />
              <Typography className={classes.bottomText}>PRODUCTS</Typography>
              <Typography className={classes.bottomText}>CTRL+ALT+P</Typography>
            </ListItem>

            <ListItem button className={classes.bottomlistItem}>
              <Avatar src="/logo512.png" />
              <Typography className={classes.bottomText}>PRODUCTS</Typography>
              <Typography className={classes.bottomText}>CTRL+ALT+P</Typography>
            </ListItem>

            <ListItem button className={classes.bottomlistItem}>
              <Avatar src="/logo512.png" />
              <Typography className={classes.bottomText}>PRODUCTS</Typography>
              <Typography className={classes.bottomText}>CTRL+ALT+P</Typography>
            </ListItem>
          </div>
          <a href="/">View all shortcuts</a>
        </div>
      </Drawer>
    </>
  );
}
