import React from 'react'
import styles from "./header.module.css"
import logo from '../../assets/logo.png'

function Logo(props){
    return( 
    <div className={styles.logo}>
        <p>
            <a href="#header">
                <img className={styles.logo_img} src={logo} alt="logo" />
            </a>
        </p>
        
    </div>
    )
}
export default Logo