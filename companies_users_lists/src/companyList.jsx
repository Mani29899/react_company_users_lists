import React from "react";
import {useNavigate} from 'react-router-dom';

const Companylist = () => {
const navigate = useNavigate();
    const handleUser = () => {
        navigate('/users')
    }

    const routeToAddCompany = () => {
        navigate('/add/company')
    }

    const handleViewCompany = () => {
        navigate('/view/company')
    }

    const handleEditCompany = () => {
        navigate('/edit/company')
    }

    const handleDeleteCompany = () => {}
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
              <button className="add-company btn btn-success" onClick={routeToAddCompany}>
                Add company
              </button>
            </div>
          </div>
        </div>
        <div className="company-list-title">
          <h5 className="list-text">Company Lists</h5>
        </div>
        <div className="body-content">
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="options-handling">
                <button className="add-company btn btn-success mange-user" onClick={handleUser}>
                  Users
                </button>
                <button className="add-company btn btn-success edit-company" onClick={handleEditCompany}>
                  Edit
                </button>
                <button className="add-company btn btn-success view-company" onClick={handleViewCompany}>
                  View
                </button>
                <button className="add-company btn btn-danger delete-company" onClick={handleDeleteCompany}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-company btn btn-success">
                Go somewhere
              </button>
            </div>
          </div>
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-company btn btn-success">
                Go somewhere
              </button>
            </div>
          </div>
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-company btn btn-success">
                Go somewhere
              </button>
            </div>
          </div>
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-company btn btn-success">
                Go somewhere
              </button>
            </div>
          </div>
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-company btn btn-success">
                Go somewhere
              </button>
            </div>
          </div>
          <div className="card-space" style={{ width: "23rem" }}>
            <img
              src={require("../src/assets/mani1.jpg")}
              className="card-img-top image-edit"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-company btn btn-success">
                Go somewhere
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companylist;
