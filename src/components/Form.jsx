import React, { Component } from "react";
import "../styles/Form.css";
import Box from "./Box";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { Weight: "", Height: "", Result: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let BMI =
      (this.state.Weight / this.state.Height / this.state.Height) * 10000;

    this.setState({
      Result:
        BMI < 18.5
          ? "underweight"
          : BMI < 24.9 && BMI >= 18.5
          ? "Normalweight"
          : BMI < 29.9 && BMI >= 25
          ? "Overweight"
          : "Obesity",
    });
  }

  render() {
    return (
      <div className="formContainer">
        <div className="p-5 d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div className="MBI-form p-5">
              <h3 className="text-center p-2 mpitext">MBI Calculator</h3>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  name="Weight"
                  placeholder="weight"
                  value={this.state.Weight}
                  onChange={this.handleChange}
                />
                <label for="floatingInput">Enter Your Weight(kg)</label>
              </div>
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingPassword"
                  name="Height"
                  placeholder="height"
                  value={this.state.Height}
                  onChange={this.handleChange}
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
          {this.state.Result ? <Box data={this.state.Result} /> : ""}
        </div>
      </div>
    );
  }
}

export default Form;
