import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LeftDrawer from "./components/LeftDrawer";
import ManageGroups from "./pages/ManageGroups";
import ManageRoles from "./pages/ManageRoles";
import ManageUser from "./pages/ManageUser";
import RightDrawer from "./components/RightDrawer";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight: "100vh",
    padding: "1rem 250px",
  },
  alignCenter: {
    textAlign: "center",
    marginTop: "10vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <LeftDrawer />
      <RightDrawer />
      <main className={classes.root}>
        <Switch>
          <Route exact path="/">
            <Typography
              variant="h3"
              color="secondary"
              className={classes.alignCenter}
            >
              Welcome to the admin page
            </Typography>
          </Route>
          <Route exact path="/dash-board/admin/manage-user">
            <ManageUser />
          </Route>
          <Route exact path="/dash-board/admin/manage-groups">
            <ManageGroups />
          </Route>
          <Route exact path="/dash-board/admin/manage-roles">
            <ManageRoles />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
