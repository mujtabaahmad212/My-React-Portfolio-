import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import bgimage from "../assets/images/gridimgs/videoplayback.mp4";
import manimg from "../assets/images/manimg.jpeg"
import Navbar from "./Navbar";
// import DeviceGrid from "./gridlayout";
import './home.css';
import HeaderText from './headertext';
import InteractiveImage from "./InteractiveImage"
import ClickSpark from './ClickSpark'
// import HoverRing from './HoverRing'
import ProjectStack from './Projects'
// import InfiniteMenu from './InfiniteMenu';







const Home = () => {
  return (
    <div className="absolute h-[100vh]  w-[100%] hide-scrollbar">
     <ClickSpark />
      <Navbar className="navbari       " />
    


{/* bg image */}
      <div className="z-20 herobg ">  
      

        <InteractiveImage className="InteractiveImage"/>


      
      </div>


      {/* <div className="w-full justify-center items-center h-[80vh] flex flex-col gap-4  ">
       <h1 className="headtext text-center " > We Transform Ideas Into Stunning Websites
       </h1>
       <p>Elevate your online presence with custom designs, seamless user experiences, and cutting-edge development crafted to captivate and convert.</p>
       
       </div> */}
  {/* <div className=" relative">
    <HeaderText/>
   
  </div> */}

      <div className="  ">
        {/* <DeviceGrid/> */}
      </div>

{/* <div className="">
  <ProjectStack/>
</div> */}

{/* 
<div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div> */}



    
    </div>
  );
};

export default Home;
