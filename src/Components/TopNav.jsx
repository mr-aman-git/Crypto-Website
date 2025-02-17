import React from "react";
import "./TopNav.css";
import Logo from "../assets/logos.png";

function TopNav() {
  return (
    <>
      <nav>
        <div className="top-nav">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="nav-box">
            <div className="dash">
              <p>Dashboard</p>
            </div>

            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;

{
  /* <div className="user">
                 <p><i class="ri-user-community-line"></i>

                  <ul>
                    <li>Profile</li>
                    <li>Detail</li>
                    <li>Payment</li>
                  </ul>
                  </p>
                </div> */
}
