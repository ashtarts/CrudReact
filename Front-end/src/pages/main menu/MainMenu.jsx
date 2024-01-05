import React from 'react'
import { Link } from 'react-router-dom';
import '../main menu/MainMenu.sass';

const MainMenu = () => {
  return (
    <div className="main-menu-container">
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
        <h3 className='menu-title'>Products Menu</h3>
        <div className="buttons">
            <button className="menu-button">
              <Link to = '/Create' style={{textDecoration: "none", color: "#000"}} >Create item</Link>
            </button>
            <button className="menu-button">
              <Link to = '/Read' style={{textDecoration: "none", color: "#000"}}>Read items</Link>
            </button>
            <button className="menu-button">
              <Link to = '/Update' style={{textDecoration: "none", color: "#000"}}>Update item</Link>
              </button>
            <button className="menu-button">
              <Link to = '/Delete' style={{textDecoration: "none", color: "#000"}}>Delete item</Link>
            </button>
        </div>
    </div>
  )
}

export default MainMenu;