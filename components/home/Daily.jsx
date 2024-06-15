import React from 'react'
import styles from "./stylesheets/Daily.module.css";

const Daily = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wordofday}>
            <h2>Hope</h2>
        </div>
        <div className={styles.bible_quote}>
            <p>Which hope we have as an anchor of the soul, both sure and steadfast...</p>
            <span>-- Hebrews 6:19 --</span>
        </div>

        <div className={styles.other_quote}>

            <p>Isn't it beautiful when you can really anchor your soul into Christ, in such a place till you can get quiet before Him? And hear His Voice speaking to you, “I'm the Lord that healeth thee. I'm the Lord that giveth thee Eternal Life. I love thee. I knowed thee before the foundation of the world. I put thy name upon the Book, thou art Mine. Fear not, it's Me. Don't be afraid, I'm with you.” Then I sing:
I've anchored my soul in a haven of rest,
I'll sail the wild seas no more;
The tempest may sweep o'er the wild, stormy deep;
But in Jesus I'm safe evermore.
Remember, the very Voice that speaks sweet to you, will condemn the sinner. The very flood that saved Noah, destroyed the sinner. See what I mean?</p>
            <span>-- by Rev WMB</span>

        </div>
    </div>
  )
}

export default Daily