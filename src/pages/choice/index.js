import React from "react";
import "./choice.css";
import Descritpion from "../../components/description";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import {
  AiFillCalendar,
  AiOutlineDotChart,
  AiOutlineAreaChart,
} from "react-icons/ai";

import CalendarChart from "../../components/calendarChart";
import ScatterChart from "../../components/scatterChart";
import SteamChart from "../../components/streamChart";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Choice = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="contentChoice">
      <Descritpion
        title="Choice Chart Page"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <div className="buttonControler">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            className="buttom"
            label="Calendar"
            icon={<AiFillCalendar className="iconButtom" />}
          />
          <BottomNavigationAction
            className="buttom"
            label="Scatter"
            icon={<AiOutlineDotChart className="iconButtom" />}
          />
          <BottomNavigationAction
            className="buttom"
            label="Stream"
            icon={<AiOutlineAreaChart className="iconButtom" />}
          />
        </BottomNavigation>
      </div>
      <div className="chart">
        {value === 0 ? (
          <CalendarChart className="calendarChart" />
        ) : value === 1 ? (
          <ScatterChart className="scatterChart" />
        ) : (
          <SteamChart className="steamChart" />
        )}
      </div>
    </div>
  );
};

export default Choice;
