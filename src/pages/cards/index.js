import React, { useState } from "react";
import "./cards.css";
import InfoCards from "../../components/infoCard";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AiFillPlusCircle } from "react-icons/ai";
import Slide from "@material-ui/core/Slide";

import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const Post = {
      title: title,
      tag: tag,
      description: description,
    };

    axios.post(`http://localhost:3001/api/infoCards`, Post).then((res) => {
      console.log(res);
      console.log(res.data);
    });

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
          {/* Titulo */}
          <FormControl className="formControl" noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Titulo"
              fullWidth
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormControl>
          {/* Tag */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Tag</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className="select"
              value={tag}
              onChange={handleChange}
            >
              <MenuItem style={{ color: "#CCCCCC" }} value={"null"}>
                Null
              </MenuItem>
              <MenuItem style={{ color: "#A9EB82" }} value={"Low"}>
                Low
              </MenuItem>
              <MenuItem style={{ color: "#FFCC69" }} value={"Medium"}>
                Medium
              </MenuItem>
              <MenuItem style={{ color: "#FFA478" }} value={"high"}>
                high
              </MenuItem>
            </Select>
          </FormControl>
          {/* Descrição */}
          <FormControl className="formControl" noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Description"
              fullWidth
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#FFA478" }}>
            Disagree
          </Button>
          <Button onClick={handleSubmit} style={{ color: "#FFA478" }} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
