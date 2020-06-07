import React from "react";
import "./description.css";
import ImgDesciption from "../../assets/description.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const Description = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="description">
      <div className="content">
        <div className="text">
          <CircularProgress
            style={{ color: "#e67225" }}
            variant="determinate"
            value={progress}
          />
        </div>
        <div className="imgContainer">
          <img src={ImgDesciption} alt="ImgDesciption" />
        </div>
      </div>
    </div>
  );
};

export default Description;
