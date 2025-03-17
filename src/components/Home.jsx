
import React from "react";

import Navbar from "./Navbar";

import './home.css';

import InteractiveImage from "./InteractiveImage"
import ClickSpark from './ClickSpark'








const Home = () => {
  return (
    <div className="absolute h-[100vh]  w-[100%] hide-scrollbar">
     <ClickSpark />
      <Navbar className="navbari       " />
    


{/* bg image */}
      <div className="z-20 herobg ">  
      

        <InteractiveImage className="InteractiveImage"/>


      
      </div>




    
    </div>
  );
};

export default Home;
