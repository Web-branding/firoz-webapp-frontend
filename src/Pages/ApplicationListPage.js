import React from "react";

import axios from "axios";
import { BaseUrl } from "../Config/Services";

const Marriage = ({ categoryForm, setMarrageForm }) => {
  const handleForm = (value, field) => {
    let temp = { ...categoryForm };
    temp[field] = value;
    setMarrageForm(temp);
  };
  return (
    <div>
      <div className="clone">
        <div className="remove control-group lst input-group mt-1">
          <input
            type="file"
            className="myfrm form-control"
            onChange={(event) => handleForm(event.target.files[0], "mfile")}
          />
          <div className="input-group-btn">
            <button className="btn btn-primary add-file" type="button">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = ({ categoryForm, setEducationalForm }) => {
  console.log("categoryForm 111", categoryForm);
  const { fee, college, course, college_place, certification_no } =
    categoryForm;
  const handleForm = (value, field) => {
    let temp = { ...categoryForm };
    temp[field] = value;
    setEducationalForm(temp);
  };
  return (
    <div>
      <div className="clone">
        <div className="remove control-group lst input-group my-4">
          <input
            type="number"
            className="myfrm form-control"
            placeholder="Fees"
            value={fee}
            onChange={(event) => handleForm(event.target.value, "fee")}
          />
        </div>

        <div className="remove control-group lst input-group my-4">
          <input
            type="text"
            className="myfrm form-control"
            placeholder="College Name"
            value={college}
            onChange={(event) => handleForm(event.target.value, "college")}
          />
        </div>

        <div className="remove control-group lst input-group my-4">
          <input
            type="text"
            className="myfrm form-control"
            placeholder="Course Name"
            value={course}
            onChange={(event) => handleForm(event.target.value, "course")}
          />
        </div>
        <div className="remove control-group lst input-group my-4">
          <input
            type="text"
            className="myfrm form-control"
            placeholder="College Place"
            value={college_place}
            onChange={(event) =>
              handleForm(event.target.value, "college_place")
            }
          />
        </div>
        <div className="remove control-group lst input-group my-4">
          <input
            type="text"
            className="myfrm form-control"
            placeholder="Certification No"
            value={certification_no}
            onChange={(event) =>
              handleForm(event.target.value, "certification_no")
            }
          />
        </div>
      </div>
    </div>
  );
};

const Treatment = ({ categoryForm, setTreatmentForm }) => {
  const handleForm = (value, field) => {
    let temp = { ...categoryForm };
    temp[field] = value;
    setTreatmentForm(temp);
  };
  return (
    <div>
      <div className="clone">
        <div className="remove control-group lst input-group mt-1">
          <input
            type="file"
            className="myfrm form-control"
            onChange={(event) => handleForm(event.target.files[0], "tfile")}
          />
          <div className="input-group-btn">
            <button className="btn btn-primary add-file" type="button">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Housing = ({ categoryForm, setHousingForm }) => {
  const handleForm = (value, field) => {
    console.log("value", value);
    let temp = { ...categoryForm };
    temp[field] = value;
    setHousingForm(temp);
  };
  return (
    <div>
      <div className="clone">
        <div className="remove control-group lst input-group">
          <div
            onChange={(event) => handleForm(event.target.value, "property")}
            className="my-3 ms-3"
          >
            <input type="radio" value="yes" name="property" className="me-2 " />
            Yes
            <span className="mx-5"></span>
            <input type="radio" value="no" name="property" className="me-2" />
            No
          </div>
        </div>
        {categoryForm.property === "yes" ? (
          <div className="remove control-group lst input-group ml-3">
            <input
              type="number"
              className="myfrm form-control"
              placeholder="How Much Property (Cent)"
              onChange={(event) => handleForm(event.target.value, "a")}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
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
  const { handleForm, form } = props;
  return (
    <>
      <div className="border p-4 rounded my-5 shadow">
        <h4 className="border-bottom pb-2">Personal Details</h4>
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
                value={form.fname}
                onChange={(event) => handleForm(event.target.value, "fname")}
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
                value={form.lname}
                onChange={(event) => handleForm(event.target.value, "lname")}
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
            value={form.place}
            onChange={(event) => handleForm(event.target.value, "place")}
          />
        </div>

        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Mobile Number
          </label>
          <input
            name="place"
            type="number"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={(event) => handleForm(event.target.value, "phone")}
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
            value={form.address}
            onChange={(event) => handleForm(event.target.value, "address")}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Aadhar Number
          </label>
          <input
            className="form-control"
            name="address"
            placeholder="Aadhar Number"
            id="exampleFormControlTextarea1"
            rows="3"
            value={form.aadhar}
            onChange={(event) => handleForm(event.target.value, "aadhar")}
          />
        </div>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Ration Card Number
          </label>
          <input
            className="form-control"
            name="address"
            placeholder="Ration Card Number"
            id="exampleFormControlTextarea1"
            rows="3"
            value={form.ration}
            onChange={(event) => handleForm(event.target.value, "ration")}
          />
        </div>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Applicant Image
          </label>
          <input
            type="file"
            className="myfrm form-control"
            onChange={(event) => handleForm(event.target.files[0], "image")}
          />
        </div>
      </div>

      <div className="border p-4 rounded my-5 shadow">
        <h4 className="border-bottom pb-2 mb-4">Details ( Amount, Proof ) </h4>
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
            value={form.amount}
            onChange={(event) => handleForm(event.target.value, "amount")}
          />
        </div>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Priority
          </label>
          <select
            id="inputState"
            name="priority"
            className="form-select"
            value={form.priority}
            onChange={(event) => handleForm(event.target.value, "priority")}
          >
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
              className="myfrm form-control"
              onChange={(event) => handleForm(event.target.files[0], "file")}
            />
            <button className="btn btn-primary add-file" type="button">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      {props.children}
    </>
  );
};

const ApplicationListPage = () => {
  const [applicationTytpe, setApplicationType] = React.useState("marriage");
  const [marrageForm, setMarrageForm] = React.useState({
    mfile: "",
  });
  const [educationalForm, setEducationalForm] = React.useState({
    fee: "",
    scholarship: false,
    college: "",
    course: "",
    college_place: "",
    certification_no: "",
  });
  const [TreatmentForm, setTreatmentForm] = React.useState({
    tfile: "",
  });
  const [housingForm, setHousingForm] = React.useState({
    property: "yes",
    cent: "",
  });

  const [form, setForm] = React.useState({
    fname: "",
    lname: "",
    place: "",
    address: "",
    phone: "",
    aadhar: "",
    ration: "",
    amount: "",
    priority: "",
    image: "",
    category: applicationTytpe,
    file: null,
  });

  const [errShow, setErroShow] = React.useState({
    visible: false,
    msg: "",
    code: -1,
  });

  const handleForm = (value, field) => {
    let temp = { ...form };
    temp[field] = value;
    setForm(temp);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("fname", form.fname);
    formData.append("lname", form.lname);
    formData.append("place", form.place);
    formData.append("address", form.address);
    formData.append("phone", form.phone);
    formData.append("aadhar", form.aadhar);
    formData.append("ration", form.ration);
    formData.append("amount", form.amount);
    formData.append("priority", form.priority);
    formData.append("image", form.image);
    formData.append("category", applicationTytpe);
    formData.append("file", form.file);

    if (applicationTytpe === "marriage") {
      formData.append("mfile", marrageForm.mfile);
    } else if (applicationTytpe === "housing") {
      for (const [key, value] of Object.entries(housingForm)) {
        formData.append(key, value);
      }
    } else if (applicationTytpe === "education") {
      for (const [key, value] of Object.entries(educationalForm)) {
        formData.append(key, value);
      }
    } else if (applicationTytpe === "treatment") {
      formData.append("tfile", TreatmentForm.tfile);
    }

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    console.log("formData Result ", formData);

    axios
      .post(`${BaseUrl}/api/application`, formData, config)
      .then((response) => {
        console.log("001", response);
        console.log("002", response.data);
        setErroShow({
          code: 1,
          visible: true,
          msg: JSON.stringify(response.data),
        });
      })
      .catch((error) => {
        console.log(error);
        setErroShow({
          code: 0,
          visible: true,
          msg: JSON.stringify(error.response.data.message),
        });
      });
  };

  return (
    <div className="mt-5">
      <div className="row m-3 d-flex justify-content-center">
        <h6
          className="h3 mb-0 text-gray-800 "
          style={{ textAlign: "center", marginTop: "3em" }}
        >
          Add New Applicant
        </h6>
      </div>
      <div className="container mb-3 py-2">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="user">
              <CommonSection handleForm={handleForm} form={form}>
                <div className="border rounded shadow p-3">
                  <h4 className="border-bottom pb-2">Category</h4>
                  <div className="my-5 mx-3">
                    <SelectInputSection
                      applicationTytpe={applicationTytpe}
                      setApplicationType={setApplicationType}
                    />

                    <div className="my-5 ">
                      {applicationTytpe === "marriage" ? (
                        <Marriage
                          categoryForm={marrageForm}
                          setMarrageForm={setMarrageForm}
                        />
                      ) : applicationTytpe === "housing" ? (
                        <Housing
                          categoryForm={housingForm}
                          setHousingForm={setHousingForm}
                        />
                      ) : applicationTytpe === "education" ? (
                        <Education
                          categoryForm={educationalForm}
                          setEducationalForm={setEducationalForm}
                        />
                      ) : (
                        applicationTytpe === "treatment" && (
                          <Treatment
                            categoryForm={TreatmentForm}
                            setTreatmentForm={setTreatmentForm}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CommonSection>

              <hr />
              <div className="row justify-content-center">
                <div className="col-md-5 py-5">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {errShow.visible ? (
        <div>
          <div class="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
            <div
              id="liveToast"
              class="toast show "
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div
                class={
                  errShow.code === 1
                    ? "toast-header bg-success "
                    : "toast-header bg-danger "
                }
              >
                <strong class={"me-auto text-white"}>Alert</strong>

                <button
                  type="button"
                  class="btn-close text-white"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={() =>
                    setErroShow({ visible: false, msg: "", code: -1 })
                  }
                ></button>
              </div>
              <div class="toast-body">{errShow.msg}</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ApplicationListPage;
