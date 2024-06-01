import React from 'react'
import style from './header.module.css'
import logo from '../../img/logotipo.jpeg'

const Header = () => {
    return (
        <div>
            <img className={style.img} src={logo} alt="logo" />
            <h3 className={style.h3}>Luiz Rocha</h3>
            <p className={style.p}>Developer</p>
        </div>
    )
}

export default Header
