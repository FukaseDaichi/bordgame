import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      backgroundColor: "#2134221",
      "&:hover": {
        backgroundColor: "#2134221",
      },
    },
  })
);

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
