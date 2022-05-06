import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Route, Redirect } from "react-router";

class Signup extends React.Component {
  //const [value, onChange] = useState(new Date());
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      dateOfBirth: new Date(),
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({
      startDate: new Date(),
    });
  };

  handleSubmit = (event) => {
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

    event.preventDefault();
  };
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
                      required
                      onChange={this.handleChange}
                    />
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
                      required
                      onChange={this.handleChange}
                    />
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
                      required
                      onChange={this.handleChange}
                    />
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
                        required
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
                        required
                        onChange={this.handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="InputDateofBirth" className="form-label">
                      Date of Birth
                    </label>
                    <DatePicker
                      required
                      className="d-block col-3"
                      onChange={this.handleChange}
                      value={this.state.dateOfBirth}
                    />
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
                      required
                      onChange={this.handleChange}
                    />
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
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      name="termsandCondition"
                      className="form-check-input"
                      id="termsandCondition"
                    />
                    <label className="form-check-label" htmlFor="Check1">
                      I agree to <a href="#">terms and conditions</a>
                    </label>
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
