import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    width: "13rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: ".5rem",
    marginBottom: "1rem",
  },
  iconContainer: {
    height: "2.5rem",
    width: "2.5rem",
    marginRight: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2rem",
    backgroundColor: "rgba(76,175,80,.1)",
  },
  icon: {
    color: theme.palette.primary.light,
  },
}));

function SummaryItem({ bgcolor, title, subtitle, Icon }) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: bgcolor ? bgcolor : "transparent",
      }}
    >
      <div className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </div>
      <div>
        <Typography variant="subtitle1" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}

export default SummaryItem;
