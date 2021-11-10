import './App.css';
import ReactFullpage from "@fullpage/react-fullpage";
import gsap from "gsap";
// import { useEffect } from 'react';
//pages
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";
import Page3 from "./page3/Page3";



function App() {
  // const mute_btn=document.querySelector(".mute_btn");




  window.addEventListener('mousemove',(e)=>{
    const cursor =document.querySelector(".cursor");
    const pointer = document.querySelector(".pointer");
    cursor.style.top= e.pageY +"px";
    cursor.style.left= e.pageX +"px";
    pointer.style.top=e.pageY +"px";
    pointer.style.left=e.pageX +"px";
    const video =document.querySelector("video");
  video.play();

  })

//////



  return (<>
  <div className="cursor"></div>
  <div className="pointer"></div>

    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {400}
    autoScrolling= {true}
    navigation= {false}
    scrollBar= {false}
    verticalCentered= {false}
    onLeave={((origin, destination, direction)=>{
      // console.log(origin.item);
          gsap.from(destination.item, {duration:0.8 ,y:-100, ease:'back.out(3)'});
          // gsap.from(origin.item, {duration:0.8 ,y:100, ease:'back.out(3)'});
    }
    )}
    render={({ state, fullpageApi }) => {
      return(
        <>
          <div id="page1" className="section">
          {/* <div className="cursor"></div> */}
            <Page1/>
          </div>
          <div id="page2" className="section">
            <Page2 />
          </div>
          <div id="page3" className="section">
            <Page3 />
          </div>
        </>
      );
    }
  }
  />
 </>);
}

export default App;
