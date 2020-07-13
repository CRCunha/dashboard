import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import "../login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className="textField"
          id="filled-basic"
          label="Nome"
          // variant="outlined"
        />
        <TextField
          className="textField"
          id="filled-basic"
          label="Email"
          // variant="outlined"
          type="email"
        />
        <TextField
          className="textField"
          id="filled-basic"
          label="Senha"
          // variant="outlined"
          type="password"
        />
      </form>
    </div>
  );
};

export default LoginForm;
