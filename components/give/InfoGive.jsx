import React from "react";
import styles from "./stylesheets/InfoGive.module.css";

const InfoGive = () => {
  return (
    <div className={styles.container}>
      <h2>Ways you can donate:</h2>

      <div className={styles.info}>
        <div className={styles.info_list}>
          <img width={100} src="/box.svg" alt="Children's Service Icon" />
          <div className={styles.info_content}>
              <p className={styles.number}>01</p>
              <p className={styles.how}>In person</p>
              <hr />
              <p className={styles.desc}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
        </div>
        <div className={styles.info_list}>
          <img width={75} src="/mailbx.svg" alt="Children's Service Icon" />
          <div className={styles.info_content}>
              <p className={styles.number}>02</p>
              <p className={styles.how}>By Email</p>
              <hr />
              <p className={styles.desc}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGive;
