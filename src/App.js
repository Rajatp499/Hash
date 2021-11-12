import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";
import "./page1/page1.css";

// import { useEffect } from 'react';
//pages
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";
import Page3 from "./page3/Page3";

function App() {
  //Gsap
  // gsap.from('.menu_close', {opacity:0,duration:5})

  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    const pointer = document.querySelector(".pointer");
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    pointer.style.top = e.pageY + "px";
    pointer.style.left = e.pageX + "px";
    const video = document.querySelector("video");
    video.play();
  });

  //////

  //Mouse muteunmute
  const muteunmute_hover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "5.7rem";
    cursor.style.width = "5.7rem";
    cursor.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "0.2";
    const pointer = document.querySelector(".pointer");
    pointer.style.display = "none";
    // const menu_close=document.querySelector(".menu_close");
    // menu_close.style.opacity="1";
  };
  const muteunmute_leave = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "2.1rem";
    cursor.style.width = "2.1rem";
    cursor.style.opacity = "0.5";
    cursor.innerHTML = "";
    cursor.style.backgroundColor = "#d8d8d8";
    const pointer = document.querySelector(".pointer");
    pointer.style.display = "block";
    const menu_close = document.querySelector(".menu_close");
    menu_close.style.opacity = "1";
  };
  const muteunmute_hover2 = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "5.7rem";
    cursor.style.width = "5.7rem";
    cursor.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "1";
    // cursor.style.zIndex= "1";
    cursor.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    cursor.innerHTML = "CLOSE";
    const menu_close = document.querySelector(".menu_close");
    menu_close.style.opacity = "0";
    const pointer = document.querySelector(".pointer");
    pointer.style.display = "none";
  };

  //Menu Click
  const menu_click = () => {
    const page1_menu = document.querySelector(".page1_menu");
    const menu_left = document.querySelector(".menu_left");
    menu_left.style.display = "block";
    page1_menu.style.transition = "all ease 1s";
    page1_menu.style.width = "100%";
    page1_menu.style.zIndex = "10";
    page1_menu.style.opacity = "1";
    const menu_close = document.querySelector(".menu_close");
    menu_close.style.opacity = "1";
  };
  const menu_close = () => {
    const page1_menu = document.querySelector(".page1_menu");
    const menu_left = document.querySelector(".menu_left");
    menu_left.style.display = "none";
    page1_menu.style.opacity = "0";
    page1_menu.style.width = "0%";
    page1_menu.style.zIndex = "-2";
  };

  //Left_menu hover
  const hover = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "3.8rem";
    cursor.style.width = "3.8rem";
    cursor.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "0.2";
  };
  const hover_leave = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "2.1rem";
    cursor.style.width = "2.1rem";
    cursor.style.opacity = "0.5";
    cursor.innerHTML = "";
    cursor.style.backgroundColor = "#d8d8d8";
  };

  return (
    <>
      <div className="cursor"></div>
      <div className="pointer"></div>
      <div
        className="menu"
        onClick={menu_click}
        onMouseOver={muteunmute_hover}
        onMouseLeave={muteunmute_leave}
      >
        <div className="menus_1"></div>
        <div className="menus_2"></div>
        <div className="menus_3"></div>
      </div>
      {/* Menu page */}
      <div className="page1_menu">
        <div
          className="menu_close"
          onClick={menu_close}
          onMouseOver={muteunmute_hover2}
          onMouseLeave={muteunmute_leave}
        >
          <IoClose />
        </div>
        <div className="menu_left">
          <span
            className="hover1"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            {" "}
            Meet Feat
          </span>{" "}
          <br />
          <span
            className="hover2"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            Services
          </span>
          <br />
          <span
            className="hover3"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            Partnership
          </span>{" "}
          <br />
          <span
            className="hover4"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            Works
          </span>
          <br />
          <span
            className="hover5"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            Blogs
          </span>
          <br />
          <span
            className="hover6"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            Podcasts
          </span>
          <br />
          <span
            className="hover7"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            Career
          </span>
          <br />
          <span
            className="hover8"
            onMouseOver={hover}
            onMouseLeave={hover_leave}
          >
            {" "}
            Get in Touch
          </span>
        </div>
        <div className="menu_right">
          <span className="right_text">Address</span>
          <br />
          Jahada Marg,
          <br />
          Biratnagar, Nepal
          <br />
          <br />
          <span className="right_text">Socials</span>
          <br />
          Facebook
          <br />
          Twitter
          <br />
          Instagram
          <br />
          Linkedin
          <br />
          <br />
          <span className="right_text">Contact us</span>
          <br />
          hashtechnologies@gmail.com
          <br />
          +977-9804302626
        </div>
      </div>

      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={400}
        autoScrolling={true}
        navigation={false}
        scrollBar={false}
        verticalCentered={false}
        onLeave={(origin, destination, direction) => {
          // console.log(direction);
          if(direction == 'up'){
            console.log("upp");
          gsap.from(destination.item, {
            duration: 0.8,
            y: -150,
            ease: "back.out(3)",
          });
          }
          // else if(direction=='down'){
          //   gsap.from(direction.item, {
          //   duration: 0.8,
          //   y: 150,
          //   ease: "back.out(3)",
          // });
          // }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div id="page1" className="section">
                {/* <div className="cursor"></div> */}
                <Page1 />
              </div>
              <div id="page2" className="section">
                <Page2 />
              </div>
              <div id="page3" className="section">
                <Page3 />
              </div>
            </>
          );
        }}
      />
    </>
  );
}

export default App;
