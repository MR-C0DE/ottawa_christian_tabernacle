import React from 'react'
import styles from "./stylesheets/Daily.module.css";

const Daily = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wordofday}>
            <h2>Hope</h2>
        </div>
        <div className={styles.bible_quote}>
            <p>He that hath an ear, let him hear what the Spirit saith unto the churches.</p>
            <span>-- ap 23.3 --</span>
        </div>

        <div className={styles.other_quote}>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, cum explicabo fuga, repudiandae tempore dolore qui ab sunt culpa laborum rem commodi, perspiciatis voluptatibus a earum ea ipsa animi? Sapiente!</p>
            <span>-- Par Rev WMB</span>

        </div>
    </div>
  )
}

export default Daily