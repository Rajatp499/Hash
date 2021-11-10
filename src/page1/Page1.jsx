import React, { useEffect } from "react";
import "./page1.css";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

//videos
import video1 from "../videos/video.mp4";

const Page1 = () => {


  const muteunmute = () => {
    const mute = document.querySelector(".IoVolumeMute");
    const unmute = document.querySelector(".IoVolumeHigh");
    const video =document.querySelector("video");
    if (mute.style.display == "none") {
      mute.style.display = "block";
      unmute.style.display = "none";
      video.muted=true;
    } else {
      mute.style.display = "none";
      unmute.style.display = "block";
      video.muted=false;
    }
  };

  //Mouse muteunmute
  const muteunmute_hover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "5.7rem";
    cursor.style.width = "5.7rem";
    cursor.style.boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "0.2";
    const pointer=document.querySelector(".pointer");
    pointer.style.display="none"; 
  };
  const muteunmute_leave =()=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "2.1rem";
    cursor.style.width = "2.1rem";
    cursor.style.opacity = "0.5";
    cursor.innerHTML="";
    cursor.style.backgroundColor="#d8d8d8";
    const pointer=document.querySelector(".pointer");
    pointer.style.display="block"; 
    const menu_close=document.querySelector(".menu_close");
    menu_close.style.opacity="1";

  }
  const muteunmute_hover2 =()=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "5.7rem";
    cursor.style.width = "5.7rem";
    cursor.style.boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "1";
    cursor.style.backgroundColor="rgba(0, 0, 0, 0.8)";
    cursor.innerHTML="CLOSE";
    const menu_close=document.querySelector(".menu_close");
    menu_close.style.opacity="0";
    const pointer =document.querySelector(".pointer");
    pointer.style.display="none";

  }

  //Menu Click
  const menu_click =()=>{
    const page1_menu = document.querySelector(".page1_menu");
    const menu_left =document.querySelector(".menu_left");
    menu_left.style.display="block";
    page1_menu.style.transition="all ease 1s";
    // page1_menu.style.opacity="1"
    page1_menu.style.width="100%";
    page1_menu.style.zIndex="100";
  }
  const menu_close=()=>{
    const page1_menu = document.querySelector(".page1_menu");
    const menu_left =document.querySelector(".menu_left");
    menu_left.style.display="none";
    // page1_menu.style.opacity="0"
    page1_menu.style.width="0%";
    page1_menu.style.zIndex="-2";
  }

 
  //Left_menu hover
  const hover=(e)=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "3.8rem";
    cursor.style.width = "3.8rem";
    cursor.style.boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "0.2";
    if(e.target.className=="hover1"){
      const hover1=document.querySelector(".hover1");
      hover1.style.color="black";
    }
    else if(e.target.className=="hover2"){
      const hover2=document.querySelector(".hover2");
      hover2.style.color="black";

    }
    else if(e.target.className=="hover3"){
      const hover3=document.querySelector(".hover3");
      hover3.style.color="black";
    }
    else if(e.target.className=="hover4"){
      const hover4=document.querySelector(".hover4");
      hover4.style.color="black";
    }
    else if(e.target.className=="hover5"){
      const hover5=document.querySelector(".hover5");
      hover5.style.color="black";
    }
    else if(e.target.className=="hover6"){
      const hover6=document.querySelector(".hover6");
      hover6.style.color="black";
    }
    else if(e.target.className=="hover7"){
      const hover7=document.querySelector(".hover7");
      hover7.style.color="black";
    }
    else if(e.target.className=="hover8"){
      const hover8=document.querySelector(".hover8");
      hover8.style.color="black";
    }
  }
  const hover_leave=(e)=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "2.1rem";
    cursor.style.width = "2.1rem";
    cursor.style.opacity = "0.5";
    cursor.innerHTML="";
    cursor.style.backgroundColor="#d8d8d8";

    if(e.target.className=="hover1"){
      const hover1=document.querySelector(".hover1");
      hover1.style.color="white";
    }
    else if(e.target.className=="hover2"){
      const hover2=document.querySelector(".hover2");
      hover2.style.color="white";

    }
    else if(e.target.className=="hover3"){
      const hover3=document.querySelector(".hover3");
      hover3.style.color="white";
    }
    else if(e.target.className=="hover4"){
      const hover4=document.querySelector(".hover4");
      hover4.style.color="white";
    }
    else if(e.target.className=="hover5"){
      const hover5=document.querySelector(".hover5");
      hover5.style.color="white";
    }
    else if(e.target.className=="hover6"){
      const hover6=document.querySelector(".hover6");
      hover6.style.color="white";
    }
    else if(e.target.className=="hover7"){
      const hover7=document.querySelector(".hover7");
      hover7.style.color="white";
    }
    else if(e.target.className=="hover8"){
      const hover8=document.querySelector(".hover8");
      hover8.style.color="white";
    }
  }

  return (
    <>
      <div className="page1">
      <div className="menu" onClick={menu_click} onMouseOver={muteunmute_hover} onMouseLeave={muteunmute_leave}>
        <div className="menus_1"></div>
        <div className="menus_2"></div>
        <div className="menus_3"></div>
      </div>
      <div className="menu" onClick={menu_click} onMouseOver={muteunmute_hover} onMouseLeave={muteunmute_leave}>
        <div className="menus_1"></div>
        <div className="menus_2"></div>
        <div className="menus_3"></div>
      </div>
        <video autoPlay loop muted >
          <source src={video1} />
        </video>
        <div className="mute_btn" onMouseOver={muteunmute_hover} onMouseLeave={muteunmute_leave}>
          <IoVolumeMute
            className="IoVolumeMute"
            onClick={muteunmute}
            
          />
          <IoVolumeHigh className="IoVolumeHigh" onClick={muteunmute} style={{ display: "none" }} />
        </div>
      </div>

      {/* Menu Page */}
      <div className="page1_menu">
        <div className="menu_close" onClick={menu_close} onMouseOver={muteunmute_hover2} onMouseLeave={muteunmute_leave}><IoClose /></div>
      <div className="menu_left">
        <span className="hover1" onMouseOver={hover} onMouseLeave={hover_leave} > Meet Feat</span> <br />
        <span className="hover2" onMouseOver={hover} onMouseLeave={hover_leave}>Services</span><br />
        <span className="hover3" onMouseOver={hover} onMouseLeave={hover_leave}>Partnership</span> <br />
        <span className="hover4" onMouseOver={hover} onMouseLeave={hover_leave}>Works</span><br />
        <span className="hover5" onMouseOver={hover} onMouseLeave={hover_leave}>Blogs</span><br />
        <span className="hover6" onMouseOver={hover} onMouseLeave={hover_leave}>Podcasts</span><br />
        <span className="hover7" onMouseOver={hover} onMouseLeave={hover_leave}>Career</span><br />
        <span className="hover8" onMouseOver={hover} onMouseLeave={hover_leave}> Get in Touch</span>
      </div>
      <div className="menu_right">
        <span className="right_text">Address</span><br />
        Jahada Marg,<br />
        Biratnagar, Nepal<br /><br />
        <span className="right_text">Socials</span><br/>
        Facebook<br />
        Twitter<br />
        Instagram<br />
        Linkedin<br /><br />
        <span className="right_text">Contact us</span><br />
        hashtechnologies@gmail.com<br />
        +977-9804302626
      </div>
      </div>
    </>
  );
};

export default Page1;
