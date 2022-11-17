import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {FaToggleOn} from 'react-icons/fa';
import {FaToggleOff} from 'react-icons/fa';
import { toast, ToastContainer } from "react-toastify";
import { doPost } from "./Service";

const Adduser = () => {
  const [firstName ,setFirstName] = useState(null);
  const [lastName ,setLastName] = useState(null);
  const [email ,setEmail] = useState(null);
  const [designation ,setDesignation] = useState(null);
  const [dob ,setDob] = useState(null);
  const [active ,setActive] = useState(null);
  const {id} = useParams();

  const navigate = useNavigate();

  const createUser = () => {
    if(firstName && lastName && designation && email && dob ) {
      let payload = {
        firstName:firstName,
        lastName:lastName,
        designation:designation,
        email:email,
        dob:dob,
        active:active,
        companyId:id
      }

      doPost('users/list/create' ,payload).then((res) => {
        if(res.response_code === 10){
          navigate(`/users/${id}`)
        }else{
          toast.error('failed to create users')
        }
      })
    }else{
      toast.error('All fields requires to create user')
    }
  }

  const handleGoBack = () => {
    navigate(`/users/${id}`);
  };
  return (
    <div className="form-holder">
      <div className="form-content-holder">
        <div className="form-details-holder">
          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h5 class="card-title">Add User</h5>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
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
                    value={designation}
                    onChange={(e) =>setDesignation(e.target.value)}
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
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </p>
              <div className="create-company-style">
                <button class="add-company btn btn-success create-company" onClick={createUser}>
                  Create
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
      <ToastContainer />
    </div>
  );
};

export default Adduser;
