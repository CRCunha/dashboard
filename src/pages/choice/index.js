import React from "react";
import "./choice.css";
import Descritpion from "../../components/description";

import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { AiFillCalendar } from "react-icons/ai";

import CalendarChart from "../../components/calendarChart";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Choice = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
            label="Favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            className="buttom"
            label="Nearby"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </div>
      <div className="chart">
        {value === 0 ? (
          <CalendarChart />
        ) : (
          <CircularProgress
            style={{ color: "#e67225" }}
            variant="determinate"
            value={progress}
          />
        )}
      </div>
    </div>
  );
};

export default Choice;
