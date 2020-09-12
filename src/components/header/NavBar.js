import React from 'react'
import styles from "./header.module.css";
function NavBar(props){
    return (
        <ul className={[styles.display_flex, styles.nav_bar].join(' ')}>
            {props.navButtons.map( (item)=>
                <li className={styles.nav_bar_li} key={item}><a className={styles.nav_bar_a} href={'#'+item}>{item}</a></li>
            )}
        </ul>
    )
}
export default NavBar;