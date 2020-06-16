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
    <div
      className="content"
      style={{
        width: "95%",
        height: "96vh",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",

        color: "#e67225",

        overflow: "auto",
      }}
    >
      <CircularProgress
        style={{
          color: "#e67225",
        }}
        variant="determinate"
        value={progress}
      />
    </div>
  );
};

export default Home;
