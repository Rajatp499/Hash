import React from "react";
import "./Industries.css";
//iamges
import corporate from "../../Images/corporate.svg"
import digital from "../../Images/digital.svg"
import finance from "../../Images/finance.svg"
import health from "../../Images/health.svg"
import insurance from "../../Images/insurance.svg"



const industries=[
    {
        icon:corporate,
        text:"Corporate House"
    },
    {
        icon:digital,
        text:"Digital Science"
    },
    {
        icon:finance,
        text:"Banking and Finance"
    },
    {
        icon:health,
        text:"Health Care"
    },
    {
        icon:insurance,
        text:"Insurance"
    },

]

const Industries = () => {
  return (
    <>
      <div className="industries">
        <div className="indpage2_left">
          <span>Industries</span>
          <div className="line"></div>
          LogicaBeans provides wide{" "}
          <span
            style={{
              color: "#0c72fa",
              fontWeight: "100",
              fontSize: "22px",
              letterSpacing: "0px",
              lineHeight: "33px",
            }}
          >
            “RANGE”
          </span>{" "}
          of products and services to different domains such as FinTech,
          InsurTech, EdTech, HealthTech to Retail and many more. Logica has been
          serving these segments since more than a decade and is entrusted by
          the customers for its quality development.
        </div>
        <div className="indpage2_right">
        {industries.map((index) => {
              {/* console.log(index); */}
              return (
                <div className="industries_card">
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

export default Industries;
