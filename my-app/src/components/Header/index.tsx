import React from 'react'
import "../../App.css"


const Header = () => {
    return (
        <nav className='main-nav'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header