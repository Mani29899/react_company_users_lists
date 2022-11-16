import React from "react";
import { useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";

const Userlist = () => {
  const navigate = useNavigate();
  
  const handleUser = () => {
    navigate("/users/add");
  };

  const routeToAddCompany = () => {
    navigate("/add/company");
  };

  const handleViewCompany = () => {
    navigate("/view/company");
  };

  const handleEditCompany = () => {
    navigate("/users/edit");
  };

  const handleBack = () => {
    navigate('/')
  }

  const handleDeleteCompany = () => {};
  return (
    <div className="user-container-holder">
      <div className="row ">
        <div className="col-md-6">
          <div className="heading mt-3">
            <h3>Companies Manage Users List</h3>
          </div>
          <div className="heading-title">
            <p className="title-text">To add the User click below</p>
            <div className="add-company-button">
              <button className="add-company btn btn-success" onClick={handleUser}>Add user</button>
            </div>
          </div>
          <div className="user-list-title">
            <h5 className="list-text">User Lists</h5>
          </div>
          {/* <div className="body-content"> */}
          <Scrollbars
            style={{ width: 500, height: 300 }}
            autoHideDuration={1000}
          >
            <div className="card-space-user">
              <div className="card-body">
                <div className="card-flex">
                  <div className="row">
                    <div className="col-4">
                      <p>First name:</p>
                      <span>welcome</span>
                      <p>Email:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Last name:</p>
                      <span>welcome</span>
                      <p>Designation:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Dob:</p>
                      <span>welcome</span>
                      <p>Active:</p>
                      <span>welcome</span>
                    </div>
                  </div>
                </div>
                <div className="icons-handling">
                  <FaUserPlus onClick={handleUser} className="userAddIcon" />
                  <FaUserEdit
                    onClick={handleEditCompany}
                    className="userEditIcon"
                  />
                  <FaUserMinus
                    onClick={handleDeleteCompany}
                    className="userDeleteIcon"
                  />

                  <FaToggleOn
                    onClick={handleDeleteCompany}
                    className="userActiveIcon"
                  />
                </div>
              </div>
            </div>

            <div className="card-space-user">
              <div className="card-body">
                <div className="card-flex">
                  <div className="row">
                    <div className="col-4">
                      <p>First name:</p>
                      <span>welcome</span>
                      <p>Email:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Last name:</p>
                      <span>welcome</span>
                      <p>Designation:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Dob:</p>
                      <span>welcome</span>
                      <p>Active:</p>
                      <span>welcome</span>
                    </div>
                  </div>
                </div>
                <div className="icons-handling">
                  <FaUserPlus onClick={handleUser} className="userAddIcon" />
                  <FaUserEdit
                    onClick={handleEditCompany}
                    className="userEditIcon"
                  />
                  <FaUserMinus
                    onClick={handleDeleteCompany}
                    className="userDeleteIcon"
                  />

                  <FaToggleOn
                    onClick={handleDeleteCompany}
                    className="userActiveIcon"
                  />
                </div>
              </div>
            </div>

            <div className="card-space-user">
              <div className="card-body">
                <div className="card-flex">
                  <div className="row">
                    <div className="col-4">
                      <p>First name:</p>
                      <span>welcome</span>
                      <p>Email:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Last name:</p>
                      <span>welcome</span>
                      <p>Designation:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Dob:</p>
                      <span>welcome</span>
                      <p>Active:</p>
                      <span>welcome</span>
                    </div>
                  </div>
                </div>
                <div className="icons-handling">
                  <FaUserPlus onClick={handleUser} className="userAddIcon" />
                  <FaUserEdit
                    onClick={handleEditCompany}
                    className="userEditIcon"
                  />
                  <FaUserMinus
                    onClick={handleDeleteCompany}
                    className="userDeleteIcon"
                  />

                  <FaToggleOn
                    onClick={handleDeleteCompany}
                    className="userActiveIcon"
                  />
                </div>
              </div>
            </div>

            <div className="card-space-user">
              <div className="card-body">
                <div className="card-flex">
                  <div className="row">
                    <div className="col-4">
                      <p>First name:</p>
                      <span>welcome</span>
                      <p>Email:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Last name:</p>
                      <span>welcome</span>
                      <p>Designation:</p>
                      <span>welcome</span>
                    </div>
                    <div className="col-4">
                      <p>Dob:</p>
                      <span>welcome</span>
                      <p>Active:</p>
                      <span>welcome</span>
                    </div>
                  </div>
                </div>
                <div className="icons-handling">
                  <FaUserPlus onClick={handleUser} className="userAddIcon" />
                  <FaUserEdit
                    onClick={handleEditCompany}
                    className="userEditIcon"
                  />
                  <FaUserMinus
                    onClick={handleDeleteCompany}
                    className="userDeleteIcon"
                  />

                  <FaToggleOn
                    onClick={handleDeleteCompany}
                    className="userActiveIcon"
                  />
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
        <div className="col-md-6">
          <div className="heading mt-3">
            <h3>Migrate Users To Another Companies</h3>
          </div>
          <div className="heading-title">
            <p className="title-text">
              To Migrate the users to another companies
            </p>
            <div className="add-company-button">
              <button className="add-company btn btn-success">proceed</button>
            </div>
          </div>
          <div className="container mt-3 pt-2">
            <div className="mb-3">
              <label className="mb-2">Select the user to migrate</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select the user to migrate</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="mb-2">Select the Company</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>select the company</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
            <button className="add-company btn btn-success edit-company" >
                Migrate
            </button>
            </div>
          </div>
          <div className="d-flex justify-content-end me-5 mt-4 pt-3">
              <button className="add-company btn btn-success" onClick={handleBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
