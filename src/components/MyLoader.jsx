import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const MyLoader = () => {
  return (
    <div class="signup-container">
      <div class="left-container">
        <div class="signup-heading">
          <div class="signup-update">Sign up for updates</div>
          <span>
            Lorem ipsum,is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>

      <div class="right-container">
        <div class="signup-box">
          <form>
            <input
              type="text"
              placeholder="Enter Email Address"
              name="search"
              class="signup-email"
            />
            <button type="submit" class="signup-btn">
              <span class="signup-confirm">Confirm</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
