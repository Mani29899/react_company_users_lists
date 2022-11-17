import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { doPost } from "./Service";
const ViewCompany = () => {
  const [companyInfo ,setCompanyInfo] = useState();
  const {id} =useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let params = {
      id:id
    }
    doPost("companies/list/id" ,params).then((res) => {
      toast.success('Info About Company')
      setCompanyInfo(res.response)
    });
  }, []);

  const handleGoBack = () => {
    navigate('/')
  }
  return (
    <div className="form-holder" style={{height:'100vh'}}>
      <div className="form-content-holder">
        <div className="form-details-holder">
          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h5 class="card-title">View Company</h5>
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
                    value={companyInfo?.companyName}
                    readOnly={true}
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
                    value={companyInfo?.companyAddress}
                    readOnly={true}
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
                    value={companyInfo?.latitude}
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
                    value={companyInfo?.longitude}
                  />
                </div>
              </p>
              <div className="create-company-style">
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

export default ViewCompany;
