import React,{ useState } from 'react'

import { FaChrome, FaShieldAlt, FaPaintBrush } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { IoRocketSharp } from "react-icons/io5";
import { MdComputer, MdRotateRight } from "react-icons/md";

import "./Services.css";
const Services = () => {

        const [services, setServices] = useState([
            {
              icon: FaChrome,
              text: "Web Application Development",
              color:"#92e186"
            },
            {
              icon: ImSearch,
              text: "Dedicated QA Services",
              color:'yellow'
            },
            {
              icon: CgProfile,
              text: "Hire a Dedicated Developer",
              color:'yellow'

            },
            {
              icon: FaShieldAlt,
              text: "Web Application Security",
              color:"yellow"

            },
            {
              icon: IoRocketSharp,
              text: "Startup Bootcamp",
              color:"yellow"
            },
            {
              icon: MdComputer,
              text: "Software Development",
              color:"yellow"
            },
            {
              icon: FaPaintBrush,
              text: "UI/UX design",
              color:"yellow"
            },
       ]);

    return (
            <div className="services">
            <div className="serpage2_left">
            <span>Services</span>
            <div className="line"></div>
            LogicaBeans provides the{" "}
            <span
              style={{
                color: "#0c72fa",
                fontWeight: "100",
                fontSize: "22px",
                letterSpacing: "0px",
                lineHeight: "33px",
              }}
            >
              “BEST”
            </span>{" "}
            technological & technical solutions to corporate houses, mid-size
            entities and also aspiring entrepreneurs to build their IDEAS to{" "}
            <span
              style={{
                color: "#0c72fa",
                fontWeight: "100",
                fontSize: "22px",
                letterSpacing: "0px",
                lineHeight: "33px",
              }}
            >
              PRODUCTS
            </span>
          </div>
          <div className="serpage2_right">
            {services.map((index) => {
              {/* console.log(index); */}
              return (
                <div className="services_card">
                  <index.icon style={{ fontSize: "45px", color:index.color }}/>
                  <br />
                  {index.text}
                </div>
              );
            })}
            </div>
            </div>
    )
}

export default Services
