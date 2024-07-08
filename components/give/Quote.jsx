import React from 'react'
import styles from "./stylesheets/Quote.module.css";
import { useTranslation } from "next-i18next";

const Quote = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
        <div className={styles.wordofday}>
            <h2>Give</h2>
        </div>


        <div className={styles.other_quote}>
          <p>{t("quote1Give")}</p>
          <p>{t("quote2Give")}</p>
        </div>
    </div>
  )
}

export default Quote