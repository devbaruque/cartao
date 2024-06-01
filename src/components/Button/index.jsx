import React from 'react'
import style from './button.module.css'

const Button = ({link, onClick, children}) => {
  return (
    <a className={style.button} onClick={onClick} href={link} target="_blank">{children}</a>
  )
}

export default Button
