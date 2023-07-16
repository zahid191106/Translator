import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  fixed-top navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img src="logo.png" alt="Logo" className="rounded-circle" width="40" height="35" />
          </a>

            <div className={`form-check form-switch me-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
        </div>
      </nav>
    </>
  );
}
