import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./stylesheets/Lecture.module.css";

export default function Lecture() {
  const sermons = [
    {
      date: "October 2, 2023",
      title: "The Power of Praise",
      duration: "02:51",
      downloadLink:
        "https://www.youtube.com/embed/5VYI2Y1voMw?si=I9En4dMIYLK5fsig",
    },
    {
      date: "October 9, 2023",
      title: "Restart Faith: An Ultimate Guide",
      duration: "02:51",
      downloadLink:
        "https://www.youtube.com/embed/5VYI2Y1voMw?si=I9En4dMIYLK5fsig",
    },
    {
      date: "October 16, 2023",
      title: "I’m a Believer, And You?",
      duration: "03:19",
      downloadLink:
        "https://www.youtube.com/embed/5VYI2Y1voMw?si=I9En4dMIYLK5fsig",
    },
    {
      date: "October 23, 2023",
      title: "Coping through Prayer",
      duration: "02:43",
      downloadLink:
        "https://www.youtube.com/embed/5VYI2Y1voMw?si=I9En4dMIYLK5fsig",
    },
    {
      date: "October 30, 2023",
      title: "The Merciful",
      duration: "03:19",
      downloadLink:
        "https://www.youtube.com/embed/5VYI2Y1voMw?si=I9En4dMIYLK5fsig",
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
          <Link
            href={sermon.downloadLink}
            key={index}
            className={styles.sermon_item}
          >
            <div className={styles.sermon_details}>
              <div className={styles.sermon_title}>
                <svg viewBox="0 0 1800 1800" className={styles.play}>
                  <g>
                    <path
                      className={styles.play}
                      d="M1407.629,872.813L693.082,460.273c-9.711-5.604-21.674-5.604-31.385,0 c-9.712,5.609-15.693,15.968-15.693,27.182v631.583c0,17.33,14.051,31.385,31.385,31.385s31.385-14.055,31.385-31.385V541.814 l620.392,358.18l-555.918,320.967c-15.014,8.669-20.154,27.864-11.489,42.874c5.815,10.07,16.363,15.692,27.213,15.692 c5.324,0,10.719-1.357,15.662-4.203l602.995-348.148c9.711-5.609,15.692-15.969,15.692-27.182 C1423.321,888.781,1417.34,878.421,1407.629,872.813z"
                    ></path>
                    <path
                      className={styles.play}
                      d="M899.993,5.324c-493.322,0-894.67,401.352-894.67,894.679c0,493.322,401.348,894.674,894.67,894.674 c493.331,0,894.683-401.352,894.683-894.674C1794.676,406.676,1393.324,5.324,899.993,5.324z M899.993,1731.906 c-458.71,0-831.899-373.188-831.899-831.903S441.283,68.095,899.993,68.095c458.719,0,831.912,373.193,831.912,831.908 S1358.712,1731.906,899.993,1731.906z"
                    ></path>
                  </g>
                </svg>
                <strong>
                  {sermon.date} - {sermon.title}
                </strong>
              </div>
              <div className={styles.sermon_duration}>{sermon.duration}</div>
            </div>
            {/*<div className={styles.sermon_player}>
                            <iframe src={sermon.downloadLink} style={{ width: '100%', height: "100px" }} />
                </div>*/}
          </Link>
        ))}
      </div>
    </div>
  );
}
