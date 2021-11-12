import React, { useState} from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particle-config";

import Services from "./components/Services";
import Technology from "./components/Technology";
import Industries from "./components/Industries";

import "./Page2.css";
// import image2 from "../Images/image2.png"
import gsap from "gsap";

const technology=()=>{
  const services =document.querySelector(".services");
  const technology=document.querySelector(".technology");
  const industries=document.querySelector(".industries");
  services.style.display="none";
  industries.style.display="none";
  technology.style.display="flex";
}
const services=()=>{
  const technology=document.querySelector(".technology");
  const services =document.querySelector(".services");
  const industries=document.querySelector(".industries");
  industries.style.display="none";
  technology.style.display="none";
  services.style.display="flex";
}
const industries=()=>{
  const technology=document.querySelector(".technology");
  const services =document.querySelector(".services");
  const industries=document.querySelector(".industries");
  technology.style.display="none";
  services.style.display="none";
  industries.style.display="flex";

}

const Page2=()=>{

  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="page2">
      <Services />
      <Technology />
      <Industries />
        <div className="page2_acheivements">
          <fieldset>
            <legend>
              <button onClick={services}>Services</button>
              <button onClick={technology} >Technologies</button>
              <button style={{border:"none"}} onClick={industries}>Industries</button>
            </legend>
            <div id="particle-js">
            {/* <Particles id="tsparticles" params={particlesConfig} init={particlesInit} loaded={particlesLoaded} />           */}
            </div>
          </fieldset>
        </div>
        </div>

      
    </>
  );
};

export default Page2;
