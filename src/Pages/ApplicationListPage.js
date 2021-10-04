import React from "react";
const Marriage = () => {
  return (
    <div>
      <div className="clone">
        <div className="remove control-group lst input-group mt-1">
          <input type="file" name="file[]" className="myfrm form-control" />
          <div className="input-group-btn">
            <button className="btn btn-danger" type="button">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Education = () => {
  return <div>002</div>;
};
const Treatment = () => {
  return <div>003</div>;
};
const Housing = () => {
  return <div>004</div>;
};

const SelectInputSection = ({ applicationTytpe, setApplicationType }) => {
  return (
    <div className="row">
      <div class="form-check col">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked={applicationTytpe === "marriage"}
          onClick={() => setApplicationType("marriage")}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Marriage
        </label>
      </div>

      <div class="form-check col">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          checked={applicationTytpe === "treatment"}
          onClick={() => setApplicationType("treatment")}
        />
        <label class="form-check-label" for="flexRadioDefault3">
          Treatment
        </label>
      </div>
      <div class="form-check col">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
          checked={applicationTytpe === "education"}
          onClick={() => setApplicationType("education")}
        />
        <label class="form-check-label" for="flexRadioDefault4">
          Education
        </label>
      </div>
      <div class="form-check col">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked={applicationTytpe === "housing"}
          onClick={() => setApplicationType("housing")}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Housing
        </label>
      </div>
    </div>
  );
};

const CommonSection = (props) => {
  return (
    <>
      <div className="form-group mb-3 py-3">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">First Name</label>

            <input
              name="fname"
              type="text"
              className="form-control"
              id="exampleInputEmail"
              placeholder="First Name"
            />
          </div>
          <div className="col-md-6">
            <label for="formGroupExampleInput" className="form-label">
              Last Name
            </label>
            <input
              name="lname"
              type="text"
              className="form-control "
              id="exampleInputEmail"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Place
        </label>
        <input
          name="place"
          type="text"
          className="form-control"
          id="exampleInputEmail"
          placeholder="Place"
        />
      </div>
      <div className="form-group mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          name="address"
          placeholder="Address"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      {props.children}
      <div className="form-group mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Reason
        </label>
        <textarea
          className="form-control"
          name="reason"
          placeholder="Reason"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Amount
        </label>
        <input
          name="amount"
          type="number"
          className="form-control "
          id="exampleInputEmail"
          placeholder="Amount"
        />
      </div>
      <div className="form-group mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Priority
        </label>
        <select id="inputState" name="priority" className="form-select ">
          <option selected>Choose...</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
          <option value="Very Urgent">Very Urgent</option>
        </select>
      </div>
      <div className="form-group mb-3 increment">
        <label for="formGroupExampleInput" className="form-label">
          Upload File
        </label>
        <div className="input-group">
          <input
            type="file"
            name="file[]"
            className="myfrm form-control "
            id="exampleInputEmail"
          />
          <button className="btn btn-primary add-file" type="button">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="clone d-none">
        <div className="remove control-group lst input-group mt-1">
          <input type="file" name="file[]" className="myfrm form-control" />
          <div className="input-group-btn">
            <button className="btn btn-danger" type="button">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ApplicationListPage = () => {
  const [applicationTytpe, setApplicationType] = React.useState("marriage");
  return (
    <div>
      <div className="row m-3 d-flex justify-content-center">
        <h6 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          Add New Applicant
        </h6>
      </div>
      <div className="container mb-3 py-2">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <form className="user">
              <CommonSection>
                <div className="my-5 mx-5">
                  <SelectInputSection
                    applicationTytpe={applicationTytpe}
                    setApplicationType={setApplicationType}
                  />

                  <div className="my-5 ">
                    {applicationTytpe === "marriage" ? (
                      <Marriage />
                    ) : applicationTytpe === "housing" ? (
                      <Housing />
                    ) : applicationTytpe === "education" ? (
                      <Education />
                    ) : (
                      applicationTytpe === "treatment" && <Treatment />
                    )}
                  </div>
                </div>
              </CommonSection>

              <hr />
              <div className="row justify-content-center">
                <div className="col-md-5 py-5">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationListPage;
