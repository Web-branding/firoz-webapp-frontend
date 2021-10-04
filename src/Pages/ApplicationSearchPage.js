import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../Config/Services";

const ApplicationSearchPage = () => {
  const [appId, setAppId] = useState("");
  const [appDetails, setDetails] = useState(null);
  const [validationErr, setValidationErr] = useState("");
  const [sortedData, setSortedData] = useState([]);

  const getDetails = () => {
    if (appId === "") {
      setValidationErr("Enter Valid Application ID");
    } else {
      setValidationErr("");
      axios.get(`${BaseUrl}/api/search/${appId}`).then((response) => {
        console.log(response.data.data);
        setDetails(response.data.data);
        keyValueData(response.data.data[1]);
      });
    }
  };

  const keyValueData = (data) => {
    let arr = [];
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
      arr.push({ key: key, value: value });
    }
    console.log(arr);
    setSortedData(arr);
  };

  const splitAndShow = (data) => {
    console.log("aaaa", data.split("_"), data.includes("_"));
    let result = data.split("_");

    if (data.includes("_")) {
      console.log(
        "EEEE",
        result[0].charAt(0).toUpperCase() + result[0].slice(1)
      );

      return (
        result[0].charAt(0).toUpperCase() +
        result[0].slice(1) +
        " " +
        result[1].charAt(0).toUpperCase() +
        result[1].slice(1)
      );
    } else {
      return data.charAt(0).toUpperCase() + data.slice(1);
    }
  };

  console.log("sortedData", sortedData);
  return (
    <div className="search container">
      <div className="row mt-5 d-flex justify-content-center container">
        <section className="row d-flex justify-content-center my-5">
          <div className="col col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Application ID"
              value={appId}
              onChange={(event) => setAppId(event.target.value)}
            />
            {validationErr !== "" && (
              <div className="text-danger">{validationErr}</div>
            )}
          </div>

          <div className="col-auto ">
            <button
              type="button"
              class="btn btn-light btn-outline-success form-control"
              onClick={() => getDetails()}
            >
              Search
            </button>
          </div>
        </section>

        {appDetails !== null ? (
          <>
            <section>
              <div className="form-group mb-3 py-3">
                <div className="border rounded p-4 mb-5 row">
                  <div className="col">
                    <span className="fs-6 fw-bold">Application Status : </span>
                    <span
                      className={
                        appDetails[0].status === "Approved"
                          ? "bg-success text-white p-1 px-2 rounded"
                          : ""
                      }
                    >
                      {appDetails[0].status}
                    </span>
                  </div>
                  <div className="col">
                    <span className="fs-6 fw-bold">
                      Application Category :{" "}
                    </span>
                    <span className="fw-700">{appDetails[0].category}</span>
                  </div>
                </div>

                <div className="border rounded p-3">
                  <h4 className="pb-2 border-bottom mb-4">Personal Details</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        name="fname"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="First Name"
                        value={appDetails[0].fname}
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
                        value={appDetails[0].lname}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="form-group col-md-6">
                      <label for="formGroupExampleInput" className="form-label">
                        Place
                      </label>
                      <input
                        name="place"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="Place"
                        value={appDetails[0].place}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="formGroupExampleInput" className="form-label">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="number"
                        className="form-control"
                        id="phonenumber"
                        placeholder="Phone Number"
                        value={appDetails[0].phone}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label for="formGroupaddressInput" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      name="address"
                      placeholder="Address"
                      id="formGroupaddressInput"
                      rows="3"
                      value={appDetails[0].address}
                    ></textarea>
                  </div>
                </div>

                <div className="border rounded p-3 mt-5">
                  <h4 className="pb-2 border-bottom mb-4">Details</h4>
                  <div className="form-group mb-3">
                    <label for="formGroupReasonInput" className="form-label">
                      Reason
                    </label>
                    <textarea
                      className="form-control"
                      name="reason"
                      placeholder="Reason"
                      id="formGroupReasonInput"
                      rows="3"
                      value={appDetails[0].reason}
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label for="formGroupAmountInput" className="form-label">
                      Amount
                    </label>
                    <input
                      name="amount"
                      type="number"
                      className="form-control"
                      id="formGroupAmountInput"
                      placeholder="Amount"
                      value={appDetails[0].amount}
                    />
                  </div>
                  <div className="form-group">
                    <label for="formGrouppriorityInput" className="form-label">
                      Priority
                    </label>
                    <input
                      name="priority"
                      type="text"
                      className="form-control"
                      placeholder="Priority"
                      id="formGrouppriorityInput"
                      value={appDetails[0].priority}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="border rounded p-3">
                <h5 className="border-bottom pb-2">Application Details</h5>
                <div className="p-3">
                  {sortedData.length
                    ? sortedData.map((item2) => {
                        return (
                          <div>
                            {item2.key !== "id" &&
                              item2.key !== "created_at" &&
                              item2.key !== "updated_at" && (
                                <div class="row mb-3 border-bottom">
                                  <span class="col-sm-2 col-form-label col-form-label-sm">
                                    {splitAndShow(item2.key)}
                                  </span>
                                  <div class="col-sm-10">
                                    <span type="text" class="">
                                      {splitAndShow(item2.value)}
                                    </span>
                                  </div>
                                </div>
                              )}
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </section>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ApplicationSearchPage;
