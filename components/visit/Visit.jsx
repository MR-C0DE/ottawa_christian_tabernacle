import React from "react";
import styles from "./stylesheets/Visit.module.css";

const Visit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.service}>
        <h2>Services:</h2>

        <p>
          Join us for worship and fellowship! We gather together to celebrate
          our faith and grow in our relationship with God. All are welcome to
          attend our services and be a part of our church family.
        </p>
        <hr />
        <div>
          <p>Every Week</p>
          <p>Sunday: 10AM - 12PM</p>
          <p>Saturday: 5PM - 7PM</p>
          <p>Thursday: 7PM (Online)</p>
        </div>
      </div>

      <div className={styles.contact_info}>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <hr />
          <p>+1 (613) 712-2184</p>
          <p>ottawachristiantabernacle@gmail.com</p>
        </div>
        <div className={styles.address}>
          <h3>Address</h3>
          <hr />
          <p>323 Montréal Rd, Vanier,</p>
          <p>Ottawa, ON K1L 7C4</p>
        </div>
      </div>
    </div>
  );
};

export default Visit;
