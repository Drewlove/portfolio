import React, {useEffect} from "react";
import Face from "./_Common/Face";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
      <Face>
        <h1>Hi! I'm Drew.</h1>
        <p>I make full stack web applications.</p>
      </Face>
  );
};

export default Home;
