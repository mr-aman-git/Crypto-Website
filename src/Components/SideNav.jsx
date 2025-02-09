import React from 'react'
import './SideNav.css'
const SideNav = () => {
  return (
    <>
    <div className="sidenav">
        <div className="nav">

            <div className="logo">
                <img src="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg" alt="" />
            </div>

            <div className="dashboard">
                <p>Dashboard</p>
            </div>

            <div className="transaction">
                <p>Transaction</p>           
            </div>

        </div>
    </div>
    </>
  )
}

export default SideNav