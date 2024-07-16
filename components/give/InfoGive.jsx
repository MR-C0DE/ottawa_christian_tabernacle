import { useTranslation } from "next-i18next";
import React from "react";
import styles from "./stylesheets/InfoGive.module.css";

const InfoGive = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2>{t("titleGive")}</h2>

      <div className={styles.info}>
        <div className={styles.info_list}>
          <img width={100} src="/box.svg" alt="Children's Service Icon" />
          <div className={styles.info_content}>
              <p className={styles.number}>01</p>
              <p className={styles.how}>{t("in_personTitleGive")}</p>
              <hr />
              <p className={styles.desc}>{t("in_personGive")}</p>
          </div>
        </div>
        <div className={styles.info_list}>
          <img width={75} src="/mailbx.svg" alt="Children's Service Icon" />
          <div className={styles.info_content}>
              <p className={styles.number}>02</p>
              <p className={styles.how}>{t("emailTitleGive")}</p>
              <hr />
              <p className={styles.desc}>{t("emailGive")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGive;
