import React from 'react'
import '../css-pages/menu.css'

export default function menuButton(props) {
    const { toggleMenu } = props;
    
    return (
        <div className="menu-icon" onMouseDown={toggleMenu}>
            <div className='menu-line'></div>
            <div className='menu-line'></div>
            <div className='menu-line'></div>
        </div>
    )
}