import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doGet, doPost } from "./Service";
const Companylist = () => {
  const [companyList, setComapnyList] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    doGet("companies/list").then((res) => {
      setComapnyList(res.response);
    });
  }, []);

  const handleUser = (id) => {
    navigate(`/users/${id}`);
  };

  const routeToAddCompany = () => {
    navigate("/add/company");
  };

  const handleViewCompany = (id) => {
    navigate(`/view/company/${id}`);
  };

  const handleEditCompany = (id) => {
    navigate(`/edit/company/${id}`);
  };

  const handleDeleteCompany = (id) => {
    let params = {
      id:id
    }
    doPost('companies/list/delete',params).then(res =>{})
    window.location.reload(false)
  };

  return (
    <div>
      <div className="company-holder">
        <div className="header-content">
          <div className="heading">
            <h3>Companies Manage Users List</h3>
          </div>
          <div className="heading-title">
            <p className="title-text">To add the company click below</p>
            <div className="add-company-button">
              <button
                className="add-company btn btn-success"
                onClick={routeToAddCompany}
              >
                Add company
              </button>
            </div>
          </div>
        </div>
        <div className="company-list-title">
          <h5 className="list-text">Company Lists</h5>
        </div>
        <div className="body-content">
          {companyList.length >= 1 &&
            companyList.map((item,index) => {
              return (
                <div className="card-space" style={{ width: "23rem" }} key={index.toString()}>
                  <iframe
                    src={`http://maps.google.com/maps?q=${item.latitude},${item.longitude}&hl=es;&output=embed`}
                    className="card-img-top image-edit"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-2 mb-2">{item?.companyName}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="options-handling">
                      <button
                        className="add-company btn btn-success mange-user user-design"
                        onClick={() =>handleUser(item.id)}
                      >
                        Users
                      </button>
                      <button
                        className="add-company btn btn-success edit-company"
                        onClick={() =>handleEditCompany(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="add-company btn btn-success view-company"
                        onClick={() =>handleViewCompany(item.id)}
                      >
                        View
                      </button>
                      <button
                        className="add-company btn btn-danger delete-company"
                        onClick={() =>handleDeleteCompany(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Companylist;
