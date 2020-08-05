import React, { useEffect } from "react";
import "./login.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

import LoginForm from "./forms/login";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <div onLoad={() => handleClickOpen()}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Login"}</DialogTitle>
        <DialogContent>
          {/* Gif Here */}
          <div className="gifImge"></div>
          <LoginForm />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#e67225" }}>Login</Button>
          <Button style={{ color: "#e67225" }}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
