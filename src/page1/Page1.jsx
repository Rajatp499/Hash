import React, { useEffect } from "react";
import "./page1.css";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

//videos
import video1 from "../videos/video.mp4";

const Page1 = () => {
  const muteunmute = () => {
    const mute = document.querySelector(".IoVolumeMute");
    const unmute = document.querySelector(".IoVolumeHigh");
    const video = document.querySelector("video");
    if (mute.style.display == "none") {
      mute.style.display = "block";
      unmute.style.display = "none";
      video.muted = true;
    } else {
      mute.style.display = "none";
      unmute.style.display = "block";
      video.muted = false;
    }
  };
  const menu_click = () => {
    const page1_menu = document.querySelector(".page1_menu");
    const menu_left = document.querySelector(".menu_left");
    menu_left.style.display = "block";
    page1_menu.style.transition = "all ease 1s";
    // page1_menu.style.opacity="1"
    page1_menu.style.width = "100%";
    page1_menu.style.zIndex = "100";
  };
  const muteunmute_hover = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.height = "5.7rem";
    cursor.style.width = "5.7rem";
    cursor.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
    cursor.style.opacity = "0.2";
    const pointer = document.querySelector(".pointer");
    pointer.style.display = "none";
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

  return (
    <>
      <div className="page1">
        <video autoPlay loop muted>
          <source src={video1} />
        </video>
        <div
          className="mute_btn"
          onMouseOver={muteunmute_hover}
          onMouseLeave={muteunmute_leave}
        >
          <IoVolumeMute className="IoVolumeMute" onClick={muteunmute} />
          <IoVolumeHigh
            className="IoVolumeHigh"
            onClick={muteunmute}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </>
  );
};

export default Page1;
