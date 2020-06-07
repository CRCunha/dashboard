import React from "react";
import "./other.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => {
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
    <div className="content">
      <CircularProgress
        style={{ color: "#e67225" }}
        variant="determinate"
        value={progress}
      />
    </div>
  );
};

export default Home;
