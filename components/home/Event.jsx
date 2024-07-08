import React from "react";
import styles from "./stylesheets/Event.module.css";
import { useTranslation } from "next-i18next";

const Event_Content = () => {
  const e = [2, 3, 4];
  return (
    <>
      {e.map((i) => {
        return (
          <div className={styles.event_content}>
            <div className={styles.date_event}>
              <p>0{i}</p>
              <p>June</p>
            </div>
            <div className={styles.event}>
              <p className={styles.event_title}>Journée Communautaire</p>
              <div className={styles.time_location}>
                <div className={styles.time}>
                  <img width={50} src="/time.svg" alt="Location Icon" />
                  <p>15h00-20h30</p>
                </div>
                <div className={styles.separate}></div>
                <div className={styles.location}>
                  <img width={50} src="/location.svg" alt="Location Icon" />
                  <p>500 Rue Terry Francine, San Francisco</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const Event = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2>{t("eventTitleHome")}</h2>

      <div className={styles.list_event}>
        <Event_Content />
      </div>
    </div>
  );
};

export default Event;
