import React from 'react';
import '../../styles/Header.sass';
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
        <div className="logo-container">
            <div className="icon"><RiShoppingCartLine /></div>
            <h1 className='logo'>Nunes Sports</h1>
        </div>
    </header>
  )
}

export default Header