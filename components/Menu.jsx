import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Importation des icônes de la bibliothèque react-icons
import { useTranslation } from "next-i18next";
import styles from "./stylesheets/Menu.module.css";
import Languages from "./Languages";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.Menu}>
      <div onClick={toggleMenu} className={styles.MenuIcon} >
        {!menuOpen && <FaBars />}{" "}
        {/* Utilisation d'icônes pour ouvrir et fermer le menu */}
      </div> 

      {menuOpen && (
        <div className={styles.Menu_Content}>
          <div onClick={toggleMenu} className={styles.MenuIcon +" "+ styles.FaTimes} >
            {menuOpen && <FaTimes />}{" "}
            {/* Utilisation d'icônes pour ouvrir et fermer le menu */}
          </div>
          <nav className={styles.MenuNav}>
            <ul className={styles.MenuList}>
              <li className={styles.MenuItem}>
                <Link href={"/"}>{t("Home")}</Link>
              </li>
              <li className={styles.MenuItem}>
                {" "}
                <Link href={"/visitus"}>Visit Us</Link>
              </li>
              <li className={styles.MenuItem}>
                <Link href={"/sermons"}>Sermons</Link>
              </li>
              <li className={styles.MenuItem}>
                <Link href={"/gallery"}>Gallery</Link>
              </li>

              <li className={styles.MenuItem}>
                <Link href={"/give"}>Give</Link>
              </li>
              <li className={styles.MenuItem}>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className={styles.MenuItemBtn}>
                <Languages />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
