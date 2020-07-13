import React from "react";
import "./cards.css";
import InfoCards from "../../components/infoCard";

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
    <div className="contentCards">
      <InfoCards />
    </div>
  );
};

export default Home;
