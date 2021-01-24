import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "../../assets/logo-future-eats@2x.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "#e8222e",
  },
});

export default function InitialScreen() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs="auto">
        <img src={Logo} alt="logo" />
      </Grid>
    </Grid>
  );
}
