import React from "react";
import { useNavigate } from "react-router-dom";
const EditCompany = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/')
  }
  return (
    <div className="form-holder" style={{height:'100vh'}}>
      <div className="form-content-holder">
        <div className="form-details-holder">
          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h5 class="card-title">Edit Company</h5>
              <p class="card-text">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Company name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="companyName"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Company address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Company address"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Latitude
                  </label>
                  <input
                    type="test"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="latitude"
                    readOnly={true}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    longitude
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="longitude"
                    readOnly={true}
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
  );
};

export default EditCompany;
