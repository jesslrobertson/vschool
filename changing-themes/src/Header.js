import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function Header(props){

    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <header className={`${color}-theme-header`}>
            <h1 className={`${color}-text`}>Theme Practice</h1>
            <div className='slider-div'>
                <button onClick={toggleTheme} className={`${color}-button`}>Change Theme</button>
            </div>
        </header>
    )
}

export default Header;