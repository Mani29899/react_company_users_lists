import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { doPost } from "./Service";

const AddCompany = () => {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${address}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLatitude(data && data[0]?.lat);
        setLongitude(data && data[0]?.lon);
      })
      .catch((err) => err);
  }, [address]);

  const createComapny = () => {
    if (!companyName || !address) {
      toast.error("Need all details to create the company");
    }

    if(!latitude || !longitude){
      toast.warn('Need valid address to get Cordinates')
    }

    if (!!latitude && !!longitude) {
      doPost("companies/list/create", {
        companyName: companyName,
        companyAddress: address,
        latitude: latitude,
        longitude: longitude,
      }).then((res) => {
        if(res.response_code === 10 ) {
          toast.success('company Created Successfully')
        }
        navigate('/')
      })
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="form-holder" style={{ height: "100vh" }}>
      <div className="form-content-holder">
        <div className="form-details-holder">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-body">
              <h5 className="card-title">Add Company</h5>
              <p className="card-text">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Company name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Company District
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Company address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Latitude
                  </label>
                  <input
                    type="test"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="latitude"
                    readOnly={true}
                    value={latitude || ""}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    longitude
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="longitude"
                    readOnly={true}
                    value={longitude || ""}
                  />
                </div>
              </p>
              <div className="create-company-style">
                <button
                  className="add-company btn btn-success create-company"
                  onClick={createComapny}
                >
                  Create
                </button>
                <button
                  className="add-company btn btn-success create-company-goback"
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

export default AddCompany;
