import React, { useState } from "react";
import NetflixSignin from "./NetflixSignin";

export default function NetflixHeaderComponent() {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <div className="d-flex justify-content-between m-3 p-3">
      <div className="title">
        <img src="images/NetflixLogo.jpg" alt="logo" width="125px" height="50px" />
      </div>
      <div className="d-flex">
        
        <div className="dropdown me-2">
          <button 
            className="btn btn-dark dropdown-toggle" 
            id="languageDropdown"
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <span className="bi bi-globe">&nbsp;</span> English
          </button>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li><a className="dropdown-item" href="https://www.netflix.com/in/">English</a></li>
            <li><a className="dropdown-item" href="https://www.netflix.com/in-hi/">हिन्दी</a></li>
          </ul>
        </div>

        <button className="btn btn-danger me-4" onClick={() => setShowSignin(true)}>
          Sign In
        </button>
      </div>

      {showSignin && <NetflixSignin show={showSignin} onClose={() => setShowSignin(false)} />}
    </div>
  );
}
