import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import { doPost } from "./Service";

const Edituser = () => {
  let [editUser, setEditUser] = useState();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [dob, setDob] = useState(null);
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const { id ,company_id} = useParams();


  useEffect(() => {
    let payload = {
      id: id,
    };
    doPost("users/list/id", payload).then(async (res) => {
      setEditUser(res.response);
    });
  }, []);

  const handleNameChange = (e) => {
    setEditUser({ ...editUser, firstName: e.target.value });
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setEditUser({ ...editUser, lastName: e.target.value });
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEditUser({ ...editUser, email: e.target.value });
    setEmail(e.target.value);
  };

  const handleDesignation = (e) => {
    setEditUser({ ...editUser, designation: e.target.value });
    setDesignation(e.target.value);
  };

  const handleDob = (e) => {
    setEditUser({ ...editUser, dob: e.target.value });
    setDob(e.target.value);
  };

  const updateUserDetails = () => {
    let payload = {
      firstName: firstName ? firstName : editUser?.firstName,
      lastName: lastName ? lastName : editUser?.lastName,
      designation: designation ? designation : editUser?.designation,
      email: email ? email : editUser?.email,
      dob: dob ? dob : editUser?.dob,
      id:id
    };

    doPost('users/list/update',payload).then((res) => {
      if(res.response_code === 0){
        handleGoBack(company_id)
      }
    })

  };

  const handleGoBack = (id) => {
    navigate(`/users/${id}`);
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
                    value={editUser?.firstName}
                    onChange={(e) => handleNameChange(e)}
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
                    value={editUser?.lastName}
                    onChange={(e) => handleLastNameChange(e)}
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
                    value={editUser?.email}
                    onChange={(e) => handleEmailChange(e)}
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
                    value={editUser?.designation}
                    onChange={(e) => handleDesignation(e)}
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
                    value={editUser?.dob}
                    onChange={(e) => handleDob(e)}
                  />
                </div>
              </p>
              <div className="create-company-style">
                <button
                  class="add-company btn btn-success create-company"
                  onClick={updateUserDetails}
                >
                  Update
                </button>
                <button
                  class="add-company btn btn-success create-company-goback"
                  onClick={() => handleGoBack(id)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
