import React from "react";
import styles from "./stylesheets/Visit.module.css";
import { useTranslation } from "next-i18next";

const Visit = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.service}>
        <h2>{t("servicesVisitUs")}</h2>

        <p>{t("worshipVisitUs")}</p>
        <hr />
        <div>
          <p>{t("scheduleEveryWeekVisitUs")}</p>
          <p>{t("scheduleSundayVisitUs")}</p>
          <p>{t("scheduleSaturdayVisitUs")}</p>
          <p>{t("scheduleThursdayVisitUs")}</p>
        </div>
      </div>

      <div className={styles.contact_info}>
        <div className={styles.contact}>
          <h3>{t("contactUsVisitUs")}</h3>
          <hr />
          <p>+1 (613) 712-2184</p>
          <p>ottawachristiantabernacle@gmail.com</p>
        </div>
        <div className={styles.address}>
          <h3>{t("addressVisitUs")}</h3>
          <hr />
          <p>323 Montréal Rd, Vanier,</p>
          <p>Ottawa, ON K1L 7C4</p>
        </div>
      </div>
    </div>
  );
};

export default Visit;
