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
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/history"}>Sermons</Link>
            </li>
            <li>
              <Link href={"/contact"}>Gallery</Link>
            </li>

            <li>
              <Link href={"/contact"}>Give</Link>
            </li>
            <li>
              <Link href={"/contact"}>About Us</Link>
            </li>
          </ul>
        </nav>
        <Languages />
        </>
      )}

      

      {width <= 900 && (
      <div className={styles.Mini}>
      <Languages />
        <Menu />
      </div>
      )}
    </div>
  );
};

export default Header;
