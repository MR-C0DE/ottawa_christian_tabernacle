import React from "react";
import styles from "./stylesheets/Info.module.css";
import { useTranslation } from "next-i18next";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p>{t("infoGallery")}</p>
    </div>
  );
};

export default Info;
