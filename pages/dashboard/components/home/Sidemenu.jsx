import styles from './stylesheets/Sidemenu.module.css'
import Link from 'next/link';
import React from 'react';
import { FaHome, FaEnvelope, FaFileAlt, FaChartBar, FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Sidemenu() {
    return (
        <div className={styles.sideMenu}>
            <div className={styles.title}>Ottawa Christian Tabernacle</div>
            <ul className={styles.menuFirst}>
                <Link href='/dashboard/' className={styles.menuItem}><FaHome className={styles.icon} /> Home</Link>
                <Link href='#' className={styles.menuItem}><FaEnvelope className={styles.icon} /> Message</Link>
                <Link href='#' className={styles.menuItem}><FaFileAlt className={styles.icon} /> Pages</Link>
                <Link href='#' className={styles.menuItem}><FaChartBar className={styles.icon} /> Analytics</Link>
                <Link href='#' className={styles.menuItem}><FaCog className={styles.icon} /> Settings</Link>
            </ul>
            <ul className={styles.menuSecond}>
                <Link href='#' className={`${styles.menuItem} ${styles.help}`}><FaQuestionCircle className={styles.icon} /> Help & Support</Link>
                <Link href='#' className={`${styles.menuItem} ${styles.log}`}><FaSignOutAlt className={styles.icon} /> Logout</Link>
            </ul>
        </div>
    );
}
