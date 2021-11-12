import React from "react";
import "./Technology.css";

//images
import angular from "../../Images/angular.svg";
import css from "../../Images/css.svg";
import git from "../../Images/git.png";
import html from "../../Images/html5.svg";
import java from "../../Images/java.png";
import javascript from "../../Images/javascript.svg";
import oracle from "../../Images/oracle.png";
import node from "../../Images/node.svg";
import protractor from "../../Images/protractor.png";
import php from "../../Images/php.svg";
import sass from "../../Images/sass.png";

const technology=[
    {
        icon:angular,
        text:"Angular"
    },
    {
        icon: css,
        text: "Css 3"
    },
    {
        icon: git,
        text: "Git"
    },
    {
        icon: html,
        text: "Html 5"
    },
    {
        icon: java,
        text: "Java"
    },
    {
        icon: javascript,
        text: "JavaScript"
    },
    {
        icon: oracle,
        text: "Oracle"
    },
    {
        icon: node,
        text: "Node"
    },
    {
        icon: protractor,
        text: "Protractor"
    },
    {
        icon: php,
        text: "Php"
    },
    {
        icon: sass,
        text: "Sass"
    },
]

const Technology = () => {
  return (
    <>
      <div className="technology">
        <div className="techpage2_left">
          <span>Technology</span>
          <div className="line"></div>
          LogicaBeans provide you the best solutions with{" "}
          <span
            style={{
              color: "#0c72fa",
              fontWeight: "100",
              fontSize: "22px",
              letterSpacing: "0px",
              lineHeight: "33px",
            }}
          >
            “LATEST”
          </span>{" "}
          global standard technologies. With our proven excellence in latest
          tools and technologies we assure you the cutting edge development
          solutions to your business needs. Our high tech approach to your
          requirements is definitely what you are looking for.{" "}
        </div>
        <div className="techpage2_right">
        {technology.map((index) => {
              {/* console.log(index); */}
              return (
                <div className="technology_card">
                  {/* <index.icon style={{ fontSize: "45px" }} /> */}
                  <img src={index.icon} />
                  <br />
                  {index.text}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Technology;
