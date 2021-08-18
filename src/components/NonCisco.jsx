import React from "react";
import "./NonCisco.css";
import { useState } from "react";

export const NonCisco = () => {
  const [subject, setSubject] = useState("");
  const [change, setChange] = useState("");
  const [eventId, setEventId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timezone, setTimezone] = useState("");
  const [scope, setScope] = useState("");
  const [impact, setImpact] = useState("");
  const [group, setGroup] = useState("");
  const [sentBy, setSentBy] = useState("");
  const [error, setError] = useState(false);
  const [dateerror, setDateError] = useState(false);

  const handleSubject = (e) => {
    let value = e.target.value;
    setSubject(value);
  };

  const handleChangeType = (e) => {
    let value = e.target.value;
    setChange(value);
  };

  const handleEvent = (e) => {
    let value = e.target.value;
    setEventId(value);
  };

  const handleStartDate = (e) => {
    let value = e.target.value;
    setStartDate(value);
  };

  const handleEndDate = (e) => {
    let value = e.target.value;
    setEndDate(value);
  };

  const handleTimezone = (e) => {
    let value = e.target.value;
    setTimezone(value);
  };

  const handleScope = (e) => {
    let value = e.target.value;
    setScope(value);
  };

  const handleImpact = (e) => {
    let value = e.target.value;
    setImpact(value);
  };

  const handleGroup = (e) => {
    let value = e.target.value;
    setGroup(value);
  };

  const handleSentBy = (e) => {
    let value = e.target.value;
    setSentBy(value);
  };

  const handleReset = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      subject.length < 1 ||
      change.length < 1 ||
      eventId.length < 1 ||
      startDate.length < 1 ||
      endDate.length < 1 ||
      timezone.length < 1 ||
      scope.length < 1 ||
      impact.length < 1 ||
      group.length < 1 ||
      sentBy.length < 1
    ) {
      setError(true);
    }
    let startDt = document.getElementById("startDate").value;
    let endDt = document.getElementById("endDate").value;
    console.log(startDt);
    console.log(endDt);

    if (new Date(startDt).getTime() > new Date(endDt).getTime()) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };
  return (
    <div className="formcontainer">
      <p className="formcontainer-head">
        DC Notification Portal for Non-Cisco Platform
      </p>

      <p className="formcontainer-top">
        Fill these for Maintenance activity details
      </p>
      <p className="formcontainer-border"></p>
      <p className="form-event">Event Details</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Notification Subject</label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              error && subject.length < 1 && "is-invalid"
            }`}
            onChange={handleSubject}
          />
          {error && subject.length < 1 && (
            <span className="invalid-feedback" style={{ fontSize: "small" }}>
              Please enter valid Notification Subject.
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Change Type</label>
          <select
            className={`form-select form-select-sm ${
              error && change.length < 1 && "is-invalid"
            }`}
            name="changeType"
            onChange={handleChangeType}
          >
            <option value="">Select</option>
            <option value="val1">val1</option>
            <option value="val2">val2</option>
            <option value="val3">val3</option>
          </select>
          {error && change.length < 1 && (
            <span className="invalid-feedback" style={{ fontSize: "small" }}>
              Please select change type.
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Event Id</label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              error && eventId.length < 1 && "is-invalid"
            }`}
            name="eventId"
            placeholder="without prefix CM"
            onChange={handleEvent}
          />
          {error && eventId.length < 1 && (
            <span className="invalid-feedback" style={{ fontSize: "small" }}>
              Please enter valid event id.
            </span>
          )}
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              Maintenance Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className={`form-control form-control-sm ${
                error && startDate.length < 1 && "is-invalid"
              }`}
              onChange={handleStartDate}
            />
            {error && startDate.length < 1 && (
              <span className="invalid-feedback" style={{ fontSize: "small" }}>
                Please select start date.
              </span>
            )}
          </div>
          <div className="col">
            <label className="form-label">Maintenance End Date</label>
            <input
              type="date"
              className={`form-control form-control-sm ${
                error && endDate.length < 1 && "is-invalid"
              }`}
              id="endDate"
              onChange={handleEndDate}
            />

            {error && endDate.length < 1 && (
              <span className="invalid-feedback" style={{ fontSize: "small" }}>
                Please select valid end date.
              </span>
            )}
            {console.log(dateerror)}
            {dateerror && (
              <span style={{ fontSize: "small", color: "#e43d40" }}>
                Start Date cannot be after End Date.
              </span>
            )}
          </div>

          <div className="col">
            <label className="form-label">Timezone</label>
            <select
              className={`form-select form-select-sm ${
                error && timezone.length < 1 && "is-invalid"
              }`}
              name="timeZone"
              onChange={handleTimezone}
            >
              <option value="">Select</option>
              <option value="time2">time2</option>
              <option value="time3">time3</option>
              <option value="time4">time4</option>
            </select>
            {error && timezone.length < 1 && (
              <span className="invalid-feedback" style={{ fontSize: "small" }}>
                Please select timezone.
              </span>
            )}
          </div>
        </div>
        <label className="form-label">Scope</label>
        <div className="form-floating">
          <textarea
            className={`form-control form-control-sm ${
              error && scope.length < 1 && "is-invalid"
            }`}
            name="scope"
            onChange={handleScope}
          ></textarea>
          {error && scope.length < 1 && (
            <span className="invalid-feedback" style={{ fontSize: "small" }}>
              Please enter scope.
            </span>
          )}
        </div>
        <label className="form-label">Impact Assessment</label>
        <div className="form-floating">
          <textarea
            className={`form-control form-control-sm ${
              error && impact.length < 1 && "is-invalid"
            }`}
            name="impact"
            onChange={handleImpact}
          ></textarea>
          {error && impact.length < 1 && (
            <span className="invalid-feedback" style={{ fontSize: "small" }}>
              Please enter impact assessment.
            </span>
          )}
        </div>

        <div className="row mt-3">
          <div className="col">
            <input className="form-control form-control-sm" type="file" />
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary btn-sm">
              Upload
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Group Name</label>
          <input
            type="text"
            className={`form-control form-control-sm ${
              error && group.length < 1 && "is-invalid"
            }`}
            name="group"
            onChange={handleGroup}
          />
          {error && group.length < 1 && (
            <span className="invalid-feedback" style={{ fontSize: "small" }}>
              Please enter valid group.
            </span>
          )}
        </div>
        <label className="form-label">Sent By</label>
        <div className="col-12 mb-3">
          <label className="visually-hidden"></label>
          <div className="input-group">
            <div className="input-group-text">
              <i className="fa fa-user icon"></i>
            </div>

            <input
              type="text"
              className={`form-control form-control-sm ${
                error && sentBy.length < 1 && "is-invalid"
              }`}
              name="sentBy"
              onChange={handleSentBy}
            />
            {error && sentBy.length < 1 && (
              <span className="invalid-feedback" style={{ fontSize: "small" }}>
                Please select valid user.
              </span>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Send Notification
        </button>
        <input
          type="reset"
          className="btn btn-danger btn-sm"
          style={{ marginLeft: "10px" }}
        />
        <p></p>
      </form>
    </div>
  );
};
