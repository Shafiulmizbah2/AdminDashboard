import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import SummaryItem from "../components/SummaryItem";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Search from "../components/Search";
import BasicTable from "../components/Table";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "2rem 0",
  },
}));

function createData(UserId, name, userName, email, creationDate, userDetails) {
  return { UserId, name, userName, email, creationDate, userDetails };
}

const Datarows = [
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
  createData(
    "#523423",
    "Shafiul azim",
    "Shafiul azim",
    "shafiulmizbah2@gmail.com",
    "4.44AM 17 August, 2021"
  ),
];
const HeadingRows = [
  { id: 0, name: "User ID" },
  { id: 0, name: "Name" },
  { id: 0, name: "User Name" },
  { id: 0, name: "Email" },
  { id: 0, name: "Creation Date" },
  { id: 0, name: "Details" },
  { id: 0, name: "Actions" },
];

function ManageUser() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapper}
      >
        <Grid item>
          <Typography variant="h6" color="primary">
            Dashboard // Admin
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Add,Edit,Delete users
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DashboardIcon />}
          >
            Dashboard
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="subtitle1" color="textPrimary">
            Summary
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapper}
      >
        <SummaryItem
          title="Admin"
          subtitle="5 users"
          Icon={PermIdentityIcon}
          bgcolor="white"
        />
        <SummaryItem
          title="Users"
          subtitle="541 users"
          Icon={PermIdentityIcon}
          bgcolor="white"
        />

        <SummaryItem
          title="Groups"
          subtitle="55 users"
          Icon={PermIdentityIcon}
          bgcolor="white"
        />

        <SummaryItem
          title="Roles"
          subtitle="25 users"
          Icon={PermIdentityIcon}
          bgcolor="white"
        />
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapper}
      >
        <Grid item>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<ArrowDownwardIcon />}
            style={{ marginRight: "1rem" }}
          >
            Download CSV
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={<ArrowDownwardIcon />}
          >
            Download PDF
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add User
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapper}
      >
        <Grid item></Grid>
        <Grid item xs={6}>
          <Search />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        className={classes.wrapper}
      >
        <BasicTable rows={Datarows} user headingRow={HeadingRows} />
      </Grid>
    </>
  );
}

export default ManageUser;
