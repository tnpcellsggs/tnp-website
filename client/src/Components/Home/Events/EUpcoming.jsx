import React from "react";

function EUpcoming(props) {
  return (
    <>
      <div className="upcoming-container">
        <div className="ue-box">
          <div
            style={{ width: "100%", height: "200px", backgroundColor: "red" }}
          ></div>
          <div className="ue-content">
            <h3>Event Name</h3>
            <h6>Event Type</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h6>00:00 am</h6>
            <h6>01 January 2000, Sunday</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default EUpcoming;
