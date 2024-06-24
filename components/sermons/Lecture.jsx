import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './stylesheets/Lecture.module.css';

export default function Lecture() {

    const sermons = [
        {
            date: 'October 2, 2023',
            title: 'The Power of Praise',
            duration: '02:51',
            downloadLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        },
        {
            date: 'October 9, 2023',
            title: 'Restart Faith: An Ultimate Guide',
            duration: '02:51',
            downloadLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        },
        {
            date: 'October 16, 2023',
            title: 'I’m a Believer, And You?',
            duration: '03:19',
            downloadLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        },
        {
            date: 'October 23, 2023',
            title: 'Coping through Prayer',
            duration: '02:43',
            downloadLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        },
        {
            date: 'October 30, 2023',
            title: 'The Merciful',
            duration: '03:19',
            downloadLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        },
    ];
/*
    const [playing, setPlaying] = useState(null);

    const togglePlay = (index) => {
        setPlaying(playing === index ? null : index);
    };**/

    return (
        <div className={styles.sermon}>
            <h1>October Sermons</h1>
            <h2>Brightside Church</h2>
            <div className={styles.sermon_list}>
                {sermons.map((sermon, index) => (
                    <Link href={sermon.downloadLink} key={index} className={styles.sermon_item}>
                        <div className={styles.sermon_details}>
                            <div className={styles.sermon_duration}>
                                {sermon.duration}
                            </div>
                            <div className={styles.sermon_title}>
                                <strong>{sermon.date} - {sermon.title}</strong>
                            </div>
                        </div>
                        <div className={styles.sermon_player}>
                            <iframe src={sermon.downloadLink} style={{ width: '100%', height: "100px" }} />
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

