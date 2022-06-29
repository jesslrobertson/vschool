import React, {useContext} from 'react'
import Header from './Header'
import './App.css'
import Main from './Main'
import Footer from './Footer'
import {ThemeContextProvider, ThemeContext} from "./themeContext"

function App(props) {

  const {color} = useContext(ThemeContext)

  return (
    <>
      
        <div className={`App ${color}-theme`}>
          <Header />
          <Main />
          <Footer />
        </div>
      
    </>
  );
}

export default App;
