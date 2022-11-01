import React from "react";
import "../styles/Box.css";
const Box = (props) => {
  return (
    <div className="main-cointainer">
      <h2 className="text-center"> Your BMI Status: {props.data}</h2>
      {props.data === "Obesity" ? (
        <h4 className="text-center">
          You must lose alot of weight otherwise you will die soon
        </h4>
      ) : props.data === "Overweight" ? (
        <h4 className="text-center">
          Carefull you need to stop gaining calories otherwise you will be Obese
          Soon
        </h4>
      ) : props.data === "Normalweight" ? (
        <h4 className="text-center">You are Fine</h4>
      ) : (
        <h4 className="text-cent">
          Eat more Food or you will be a skeleton soon
        </h4>
      )}
    </div>
  );
};
export default Box;
