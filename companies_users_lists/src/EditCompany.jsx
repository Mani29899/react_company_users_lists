import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doPost } from "./Service";
const EditCompany = () => {
  const [latitude ,setLatitude] =useState(null);
  const [longitude ,setLongitude] = useState(null);
  let [companyDetails, setCompanyDetails] = useState();
  const navigate = useNavigate();
  const {id} = useParams();
  
  useEffect(() => {
    let payload = {
      id:id
    }
    doPost('companies/list/id' ,payload).then(async(res) => {
       setCompanyDetails(res.response);
    })
  }, []);


  useEffect(() => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${companyDetails?.companyAddress}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLatitude(data && data[0]?.lat);
        setLongitude(data && data[0]?.lon);
      })
  },[companyDetails?.companyAddress])

  const updateCompanyDetails = () => {
    let payload = {
      id:id,
      companyName:companyDetails?.companyName,
      companyAddress:companyDetails?.companyAddress,
      latitude:latitude ? latitude : companyDetails?.latitude,
      longitude:longitude ? longitude : companyDetails?.longitude,
      isActive:true
    }
    
    doPost('companies/list/update' ,payload).then(async(res) => {
      handleGoBack()
   })
  }

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
                    value={companyDetails?.companyName}
                    onChange={(e) => setCompanyDetails({companyName:e.target.value})}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    District address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Company address"
                    value={companyDetails?.companyAddress}
                    onChange={(e) =>setCompanyDetails({companyAddress:e.target.value})}
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
                    value={latitude ? latitude : companyDetails?.latitude}
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
                    value={longitude ? longitude : companyDetails?.longitude}
                  />
                </div>
              </p>
              <div className="create-company-style">
              <button class="add-company btn btn-success create-company" onClick={updateCompanyDetails}>
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
