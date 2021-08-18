import React from "react";
import "./App.css";

export const App = () => {
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
      <form>
        <label className="form-label">
          Notification Subject <span className="form-required">*</span>
        </label>
        <br />
        <input className="form-element" type="text" />
        <br />
        <label className="form-label">
          Change type<span className="form-required">*</span>
        </label>
        <br />
        <select className="form-select">
          <option>Select</option>
          <option>val2</option>
          <option>val3</option>
          <option>val4</option>
        </select>
        <br />
        <label className="form-label">
          Event Id<span className="form-required">*</span>
        </label>
        <br />
        <input className="form-element" type="text" />
        <br />
        <div className="row">
          <div className="column column-one column-offset-2">
            <label className="form-label">
              Maintenance start date<span className="form-required">*</span>
            </label>
            <br />
            <input className="form-date" type="date" />
          </div>
          <div className="column column-two column-inset-1">
            <label className="form-label">
              Maintenance end date<span className="form-required">*</span>
            </label>
            <br />
            <input className="form-date" type="date" />
          </div>
          <div className="column column-three column-offset-1">
            <label className="form-label">
              Timezone<span className="form-required">*</span>
            </label>
            <br />
            <select className="form-date">
              <option>Select</option>
              <option>time2</option>
              <option>time3</option>
              <option>time4</option>
            </select>
          </div>
        </div>
        <br />
        <br />
        <div className="form-scope">
          Scope<span className="form-required">*</span>
        </div>
        <textarea className="form-element" rows="5" cols="30"></textarea>
        <br />
        <label className="form-label">
          Impact Assessment<span className="form-required">*</span>
        </label>
        <br />
        <textarea className="form-element" rows="5" cols="30"></textarea>
        <br />
        <input className="form-file" type="file" />
        <input className="form-upload" value="Upload" type="button" /> <br />
        <label className="form-label">
          Group Name<span className="form-required">*</span>
        </label>
        <br />
        <select className="form-select">
          <option>Select</option>
          <option>gp1</option>
          <option>gp2</option>
        </select>
        <br />
        <label className="form-label">
          Sent By
          <span className="form-required">*</span>
        </label>
        <br />
        <span className="form-icon">
          {" "}
          <i className="fa fa-user icon"></i>
        </span>
        <input className="form-element" type="text" />
        <br />
        <input
          className="form-notification"
          type="submit"
          value="Send Notification"
        />
        <input className="form-reset" value="Reset" type="button" />
      </form>
    </div>
  );
};
