import React from "react";
import "../styles/Form.css";
import Box from "./Box";
import { useState } from "react";

const Form = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    let BMI = (weight.weight / height.height / height.height) * 10000;

    let result =
      BMI < 18.5
        ? "underweight"
        : BMI < 24.9 && BMI >= 18.5
        ? "Normalweight"
        : BMI < 29.9 && BMI >= 25
        ? "Overweight"
        : "Obesity";
    setResult(result);
  }

  return (
    <div className="formContainer">
      <div className="p-5 d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="MBI-form p-5">
            <h3 className="text-center p-2 mpitext">MBI Calculator</h3>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                name="weight"
                placeholder="weight"
                onChange={(e) => setWeight({ weight: e.target.value })}
              />
              <label for="floatingInput">Enter Your Weight(kg)</label>
            </div>
            <div class="form-floating">
              <input
                type="number"
                class="form-control"
                id="floatingPassword"
                name="height"
                placeholder="height"
                onChange={(e) => setHeight({ height: e.target.value })}
              />
              <label for="floatingPassword">Enter Your height(cm)</label>

              <input
                className="mt-2 rounded-1 border border-success"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        {result ? <Box data={result} /> : ""}
      </div>
    </div>
  );
};

export default Form;
