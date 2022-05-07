import React, { useState } from "react";
import { Route, Redirect } from "react-router";
import RDatePicker from "./RDatePicker";

class Signup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: {},
      errors: {},
    };
  }
  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      let input = {};
      input["firstName"] = "";
      input["lastName"] = "";
      input["email"] = "";
      input["gender"] = "";
      input["dateOfBirth"] = "";
      input["password"] = "";
      input["confirmPassword"] = "";
      input["termsandCondition"] = "";
      this.setState({ input: input });
      console.log(this.state);
      fetch("http://localhost:4000/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state),
      }).then(function (response) {
        console.log(response);
        window.location.href = "/list-users";
        return response.json();
      });
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter your first name.";
    }

    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your last name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["gender"]) {
      isValid = false;
      errors["gender"] = "Please select your gender.";
    }

    if (!input["dateOfBirth"]) {
      isValid = false;
      errors["dateOfBirth"] = "Please select date of birth.";
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please enter your confirm password.";
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirmPassword"] !== "undefined"
    ) {
      if (input["password"] != input["confirmPassword"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }
    console.log(input["termsandCondition"]);
    if (!input["termsandCondition"]) {
      console.log("HERE");
      isValid = false;
      errors["termsandCondition"] = "Please tick terms and conditions.";
    }

    this.setState({
      errors: errors,
    });

    console.log(errors);

    return isValid;
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 mt-5 mx-auto">
            <div className="card">
              <div className="card-header">Signup</div>
              <div className="card-body">
                <form method="post" onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="InputFirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="InputFirstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                    <div className="text-danger">
                      {this.state.errors.firstName}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputLastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      id="InputLastName"
                      onChange={this.handleChange}
                      value={this.state.lastName}
                    />
                    <div className="text-danger">
                      {this.state.errors.lastName}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="InputEmail"
                      aria-describedby="emailHelp"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                    <div className="text-danger">{this.state.errors.email}</div>
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="inlineRadio1"
                        defaultValue="Male"
                        onChange={this.handleChange}
                      />

                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="inlineRadio2"
                        defaultValue="Female"
                        onChange={this.handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                    <div className="text-danger">
                      {this.state.errors.gender}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputDateofBirth" className="form-label">
                      Date of Birth
                    </label>

                    <RDatePicker handleChange={this.handleChange} />
                    <div className="text-danger">
                      {this.state.errors.dateOfBirth}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="InputPassword"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <div className="text-danger">
                      {this.state.errors.password}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="InputConfirmPassword"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      id="InputConfirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                    <div className="text-danger">
                      {this.state.errors.confirmPassword}
                    </div>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      name="termsandCondition"
                      className="form-check-input"
                      id="termsandCondition"
                      value="1"
                      checked={this.state.termsandCondition}
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="Check1">
                      I agree to <a href="#">terms and conditions</a>
                    </label>
                    <div className="text-danger">
                      {this.state.errors.termsandCondition}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
