import React from 'react'
import Card from './Card';
import styles from './card.module.css'

function CardField(props){
    return(
        <div className={styles.cardField}>
            {props.cardObject.map( (item) =>            
                <Card key={item.cardTitle} cardImg={item.cardImg} cardTitle={item.cardTitle}/>
            )}
        </div>
    )
}

export default CardField;