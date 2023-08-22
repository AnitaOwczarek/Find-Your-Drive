import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose,AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import Logo from '../../images/logo.png'
// import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <div>
      <header className={styles.navbar}>
            <img src={Logo} alt="/" />
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') :  [styles.menu]}>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="s/">Log in</a>
                    </li>
                    <li>
                        <a href="/">Sing up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style={{marginTop: '6px'}} />
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                    </li>
                </ul>
            </nav>
            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/> } 
            </div>
      </header>
    </div>
  )
}

export default Navbar
