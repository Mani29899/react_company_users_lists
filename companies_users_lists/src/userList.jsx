import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { FaToggleOff, FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { doGet, doPost } from "./Service";
import { toast, ToastContainer } from "react-toastify";

const Userlist = () => {
  const [userList, setUserList] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [active, setActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [selectedCompany, setSelectedCompany] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedUserInputValue = useRef("");
  const selectedCompanyInputValue = useRef("");

  useEffect(() => {
    let params = {
      companyId: id,
    };
    doPost("users/list/company/id", params).then((res) => {
      setUserList(res.response);
    });

    doGet("companies/list").then((res) => {
      setCompanyList(res.response);
    });
  }, []);

  const createUser = () => {
    navigate(`/users/${id}/add`);
  };

  const handleEditCompany = (id, company_id) => {
    navigate(`/users/${company_id}/edit/${id}`);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleDeactivateUser = (id) => {
    let params = {
      id: id,
      active: active,
    };

    doPost("users/list/delete", params).then((res) => {
      window.location.reload(false);
      toast.success("User Removed from the userlist");
    });
  };

  const handleSelectUser = (e) => {
    selectedUserInputValue.current = e.target.value;
    setSelectedUser(selectedUserInputValue.current);
  };

  const handleCompanyList = (e) => {
    selectedCompanyInputValue.current = e.target.value;
    setSelectedCompany(selectedCompanyInputValue.current);
  };

  const handleMigrate = () => {
    let companyId = undefined,
    userId = undefined;
    doGet("companies/list").then(async (res) => {
      companyId = await res?.response?.find((item) => {
        if (item?.companyName === selectedCompany) {
            return item.id;
        }
      })
    }).then(() => {
      doGet("users/list").then(async (res) => {
        userId = await res?.response?.find((item) => {
          if (item?.firstName === selectedUser) {
            return item.id;
          }
        });

        let migratePayload = {
          id:userId && userId?.id || id,
          companyId:companyId && companyId?.id || 1
        }
        if(!!migratePayload) {
          doPost('users/list/update',migratePayload).then((res) => {
            if(res.response_code === 0) {
              toast.success('SuccessFully user migrated')
            } 
            setTimeout(() => {
              handleBack()
            }, 1000);
          })
        }else {
          toast.warn('Migration Process fails')
        }
        
     
      })
    })
  };

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
              <span
                className="add-company btn btn-success"
                onClick={createUser}
              >
                add user
              </span>
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
            {userList.length >= 1 &&
              userList.map((item, index) => {
                return (
                  <div className="card-space-user" key={index.toString()}>
                    <div className="card-body">
                      <div className="card-flex">
                        <div className="row">
                          <div className="col-4">
                            <p>First name:</p>
                            <span>{item?.firstName || "-"}</span>
                            <p>Email:</p>
                            <span>{item?.email || "-"}</span>
                          </div>
                          <div className="col-4">
                            <p>Last name:</p>
                            <span>{item?.lastName || "-"}</span>
                            <p>Designation:</p>
                            <span>{item?.designation || "-"}</span>
                          </div>
                          <div className="col-4">
                            <p>Dob:</p>
                            <span>{item?.dob || "-"}</span>
                            <p>Active:</p>
                            <span>
                              {item?.isActive ? "active" : "inactive"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="icons-handling">
                        <FaUserEdit
                          onClick={() => handleEditCompany(item.id, id)}
                          className="userEditIcon"
                        />
                        <FaUserMinus
                          onClick={() => handleDeactivateUser(item.id)}
                          className="userDeleteIcon"
                        />
                        <div>
                          {item?.isActive === active ? (
                            <FaToggleOff
                              className="userActiveIcon"
                              onClick={() => setActive(false)}
                            />
                          ) : (
                            <FaToggleOn
                              className="userActiveIcon"
                              onClick={() => setActive(true)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {userList.length === 0 && (
              <div className="card-space-user">
                <h5>No User List Found</h5>
              </div>
            )}
          </Scrollbars>
        </div>
        <div className="col-md-6">
          <div className="">
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
            <div
              className={
                userList.length >= 1
                  ? "container mt-3 pt-2 card-space-user"
                  : ""
              }
            >
              {userList.length >= 1 && (
                <>
                  <div className="m-3">
                    <label className="mb-2">Select the user to migrate</label>

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleSelectUser(e)}
                      defaultValue={selectedUser}
                      value={selectedUser}
                      ref={selectedUserInputValue}
                    >
                      {userList.length >= 1 &&
                        userList.map((item, index) => {
                          debugger;
                          return (
                            <>
                              <option
                                value={item.firstName}
                                key={index.toString()}
                              >
                                {item.firstName}
                              </option>
                            </>
                          );
                        })}
                    </select>
                  </div>
                  <div className="m-3">
                    <label className="mb-2">Select the Company</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={handleCompanyList}
                      defaultValue={selectedCompany}
                      value={selectedCompany}
                      ref={selectedCompanyInputValue}
                    >
                      {companyList.length >= 1 &&
                        companyList.map((item, index) => {
                          return (
                            <>
                              <option
                                value={item.companyName}
                                key={index.toString()}
                              >
                                {item.companyName}
                              </option>
                            </>
                          );
                        })}
                    </select>
                  </div>
                  <div className="m-2">
                    <button
                      className="add-company btn btn-success edit-company"
                      onClick={handleMigrate}
                    >
                      Migrate
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="d-flex justify-content-end me-5 mt-4 pt-3">
              <button
                className="add-company btn btn-success"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Userlist;
