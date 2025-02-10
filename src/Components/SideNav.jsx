import React from 'react'
import './SideNav.css'
const SideNav = () => {
  return (
    <>
    <div className="sidenav">
        <div className="nav">

            <div className="mininav">
                <div className="logo">
                    <img src="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg" alt="" />
                </div>

                <div className="dashboard hovers">
                    <p> <i class="ri-dashboard-line"></i> Dashboard</p>
                </div>

                <div className="transaction hovers">
                    <p> <i class="ri-arrow-left-right-fill"></i> Transaction</p>           
                </div>
            </div>

            <div className="support hovers">
                <p> <i class="ri-customer-service-2-line"></i> Support</p>           
            </div>

        </div>
    </div>
    </>
  )
}

export default SideNav