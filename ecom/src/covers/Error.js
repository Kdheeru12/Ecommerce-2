import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const Error = ({ classes, error,setayerror }) => {
  const [open, setOpen] = useState(true);
  const close = () =>{
    setOpen(false)
    setayerror(null)
  }
  return (
    <Snackbar
      open={open}
      className={classes.snackbar}
      message={`${error.message} check internet`}
      action={
        <Button onClick={() => {close()}} color="secondary" size="small">
          Close
        </Button>
      }
    />
  );
};

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(Error);