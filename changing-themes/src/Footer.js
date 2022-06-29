import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function Footer (props){

    const {color} = useContext(ThemeContext)

    return (
        <footer className={`${color}-theme-footer`}>
            <a className={`${color}-text`} href='https://webb.nasa.gov/content/webbLaunch/whereIsWebb.html'>Where is Webb?</a>
        </footer>
    )
}

export default Footer