import React from 'react'
import logo from '../images/logo.png'
import '../styles/logo.css'

export default function Logo() {
    return (
        <div className="logo--container">
            <img src={logo} className="logo--img" width="500px"></img>
        </div>
    )

}
