import React from 'react'
import logo from '../images/logo.png'
const Nav = () => {
  return (
        <nav>
            
            <ul>
            <div >
                <img src={logo} alt="logo" /> <span className='title' >Sare Foundation</span>
            </div>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Reports
                </li>
                <li>
                    Donate
                </li>
            </ul>
        </nav>
  )
}

export default Nav