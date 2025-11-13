import React from "react";
import "./home.css";
import InteractiveImage from "./InteractiveImage";
import ClickSpark from "./ClickSpark";


const Home = () => {
  return (
  <>
  
    <div className="homediv relative w-[100vw] h-screen hide-scrollbar">
    {/* <Spline scene="https://prod.spline.design/VfTYhn3cxv4aIlrv/scene.splinecode" /> */}

      <div className="">
        <InteractiveImage />
      </div>

      {/* <div className="">
        <TextPressure
          text="mujtaba-ahmad"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={false}
          textColor="#ffffff"
          strokeColor="orange"
          minFontSize={56}
        />
      </div> */}

      <ClickSpark />
    </div>
    </>
  );
};

export default Home;