import React from 'react';
import Image from 'next/image';
import styles from './stylesheets/Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.topBar}>
                <div className={styles.topItem}>Event</div>
                <div className={styles.topItem}>Predications</div>
                <div className={styles.topItem}>Gallery</div>
            </div>
            <div className={styles.sectionKhaki}>
                <div className={styles.motDuJour}>
                    <img src="/images/mot1.jpg" alt="Mot du jour 1" className={styles.image} />
                    <p>Mot du jour</p>
                </div>
                <div className={styles.motDuJour}>
                    <img src="/images/mot2.jpg" alt="Mot du jour 2" className={styles.image} />
                    <p>Mot du jour</p>
                </div>
            </div>
            <div className={styles.sectionWhite}>
                <div className={styles.motDuJour}>
                    <img src="/images/mot3.jpg" alt="Mot du jour 3" className={styles.image} />
                    <p>Mot du jour</p>
                </div>
                <div className={styles.motDuJour}>
                    <img src="/images/mot4.jpg" alt="Mot du jour 4" className={styles.image} />
                    <p>Mot du jour</p>
                </div>
            </div>
        </div>
    );
}
