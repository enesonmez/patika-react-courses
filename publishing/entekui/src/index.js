import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return <button {...props} className={`${styles[('entek-btn-'+props.type)]} ${styles['entek-btn']}`}>{props.children}</button>
}
