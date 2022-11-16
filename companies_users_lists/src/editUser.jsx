import React from 'react'
import { useNavigate } from "react-router-dom";
import {FaToggleOn} from 'react-icons/fa';
import {FaToggleOff} from 'react-icons/fa';

const Edituser = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/users");
  };
  return (
    <div className="form-holder">
      <div className="form-content-holder">
        <div className="form-details-holder">
          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h5 class="card-title">Edit User</h5>
              <p class="card-text">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="firstName"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Last name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="designation"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Dob
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="dob"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Active
                  </label>
                  <FaToggleOn
                    className="userActiveIcon"
                  />
                </div>
              </p>
              <div className="create-company-style">
                <button class="add-company btn btn-success create-company">
                  Update
                </button>
                <button
                  class="add-company btn btn-success create-company-goback"
                  onClick={handleGoBack}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edituser