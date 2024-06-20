import React from 'react'
import styles from "./stylesheets/Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wordofday}>
            <h2>Give</h2>
        </div>


        <div className={styles.other_quote}>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum possimus fuga mollitia unde iste ea dolor reiciendis ab, laborum labore eveniet veniam, autem laboriosam nesciunt ducimus porro sed sint ipsam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam architecto eos iure ea tempora quod harum ab autem! Reiciendis nostrum similique, consectetur consequuntur nulla dolorem animi quod quos adipisci cum?</p>

        </div>
    </div>
  )
}

export default Quote