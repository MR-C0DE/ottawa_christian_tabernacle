import React from 'react'
import styles from "./stylesheets/Service.module.css";

const Service = () => {
  return (
    <div className={styles.container}>
        <h2>Services</h2>
        <p className={styles.desc}>Our church offers a variety of services to cater to different spiritual needs and schedules. Join us for meaningful worship and community.</p>
        <div className={styles.detail_content}>
            <div>
                <img width={50}  src="/sun.svg" alt="Sunday Service Icon" />
                <h3>Sunday Service</h3>
                <p>10:00 AM - 12:00 PM - Join us for a time of worship, teaching, and fellowship. Everyone is welcome!</p>
            </div>
            <div>
                <img width={50}  src="/star.svg" alt="Saturday Service Icon" />
                <h3>Saturday Service</h3>
                <p>5:00 PM - 7:00 PM - A weekend service for those who prefer to gather on Saturday.</p>
            </div>
            <div>
                <img width={50}  src="/circle.svg" alt="Children's Service Icon" />
                <h3>Children's Service</h3>
                <p>9:00 AM - 10:00 AM - A special service designed for children, with activities and lessons tailored to young minds.</p>
            </div>
        </div>
    </div>
  )
}

export default Service
