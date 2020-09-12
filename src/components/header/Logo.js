import React from 'react'
import styles from "./header.module.css"
import logo from '../../assets/logo.png'

function Logo(props){
    return( 
    <div className={styles.logo}>
        <img className={styles.logo_img} src={logo} alt="logo" />
    </div>
    )
}
export default Logo