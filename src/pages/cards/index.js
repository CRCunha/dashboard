import React, { useState } from "react";
import "./cards.css";
import InfoCards from "../../components/infoCard";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AiFillPlusCircle } from "react-icons/ai";
import Slide from "@material-ui/core/Slide";

import TextField from "@material-ui/core/TextField";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FFA478",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFA478",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFA478",
      },
      "&:hover fieldset": {
        borderColor: "#FFA478",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFA478",
      },
    },
  },
})(TextField);

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contentCards">
      <div className="buttonCardContainer">
        <Button onClick={handleClickOpen} className="buttonCard">
          Adicionar Card
          <AiFillPlusCircle className="iconPlus" />
        </Button>
      </div>
      <InfoCards color="#FFCC69" />
      <InfoCards color="#A9EB82" />
      <InfoCards color="#FFA478" />
      <InfoCards />
      <InfoCards />
      <InfoCards />

      {/* Dialig */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-title">{"Novo Card"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
          <form noValidate autoComplete="off">
            <CssTextField id="standard-basic" label="Standard" fullWidth />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#FFA478" }}>
            Disagree
          </Button>
          <Button onClick={handleClose} style={{ color: "#FFA478" }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
