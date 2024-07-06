import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="LoginPage">
      <main className="main-content">
        <div className="admin">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-8">
                <div className="edit-profile">
                  <div className="signup_card border-0">
                    <div className="card-header bg-white">
                      <div className="edit-profile__title text-center">
                        <h6>Sign Up FinTrack</h6>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="edit-profile__body">
                        <div className="form-group mb-4">
                          <label htmlFor="username" className="mb-1 mt-2">
                            Email Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="password-field" className="mb-1">
                            Password
                          </label>
                          <div className="position-relative">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                            />
                            <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></div>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="password-field" className="mb-1">
                            Confirm Password
                          </label>
                          <div className="position-relative">
                            <input
                              id="password-field2"
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Confirm Password"
                            />
                            <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></div>
                          </div>
                        </div>
                        <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center">
                          <button className="btn btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn mb-3">
                            Create Account
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="admin-topbar">
                      <p className="mb-0 text-center">
                        Already have an account?
                        <Link to={"/"} className="NA_Signup ps-1">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
