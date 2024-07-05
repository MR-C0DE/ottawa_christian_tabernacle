import React, { useEffect } from "react";
import Languages from "./Languages";
import styles from "./stylesheets/Header.module.css";
import { useTranslation } from "next-i18next";
import { useLanguage } from "./contexts/LanguageContext";
import Link from "next/link";
import { useScreenSize } from "./contexts/ScreenSizeContext";
import Menu from "./Menu";

const Header = () => {
  
  const { t } = useTranslation();

  const { width } = useScreenSize();
  return (
    <div className={styles.Header}>
      <Link className={styles.title}  href={"/"}>
        <h1 >Ottawa christian <br /> Tabernacle</h1>
      </Link>
      {width > 900 && (
        <>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>{t("Home")}</Link>
            </li>
            <li>
              {" "}
              <Link href={"/visitus"}>{t("VisitUs")}</Link>
            </li>
            <li>
              <Link href={"/sermons"}>{t("Sermons")}</Link>
            </li>
            <li>
              <Link href={"/gallery"}>{t("Gallery")}</Link>
            </li>

            <li>
              <Link href={"/give"}>{t("Give")}</Link>
            </li>
            <li>
              <Link href={"/about"}>{t("AboutUS")}</Link>
            </li>
          </ul>
        </nav>
        <Languages />
        </>
      )}

      

      {width <= 900 && (
      <div className={styles.Mini}>
        <Menu />
      </div>
      )}
    </div>
  );
};

export default Header;
