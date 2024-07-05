import React from "react";
import styles from "./stylesheets/Footer.module.css";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {t} = useTranslation();

  return (
    <footer className={styles.Footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerText}>{t("organizationName")}</div>
        <div className={styles.contactInfo}>
          <div className={styles.numemail}>
            <p>+1 (613) 712-2184</p>
            <p>
              <a
                href="mailto:ottawachristiantabernacle@gmail.com"
                className={styles.footerLink}
              >
                ottawachristiantabernacle@gmail.com
              </a>
            </p>
            <p>
            support:
              <a
                href="mailto:studios.oct@gmail.com"
                className={styles.footerLink}
              >
                studios.oct@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.address}>
            <p>323 Montréal Rd, Vanier</p>
            <p>Ottawa, ON K1L 7C4</p>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="#"
            target="_blank"
            aria-label="Instagram"
          >
            <img
              src="https://static.wixstatic.com/media/d7ffe259c9e54f59837481b3dd0130eb.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.youtube.com/@ottawachristiantabernacle9207"
            target="_blank"
            aria-label="YouTube"
          >
            <img
              src="https://static.wixstatic.com/media/af037f3cc11741d1ada5c7f70d1074bf.png"
              alt="YouTube"
            />
          </a>
          <a
            href="#"
            target="_blank"
            aria-label="Facebook"
          >
            <img
              src="https://static.wixstatic.com/media/d3470ec8ca26475da4b228f0199b5d3d.png"
              alt="Facebook"
            />
          </a>
        </div>

        <div className={styles.policies}>
          <p>
            <a
              href="#"
              className={styles.footerLink}
            >
              {t("termsConditions")}
            </a>
          </p>
          <p>
            <a
              href="#"
              className={styles.footerLink}
            >
              {t("privacyPolicy")}
            </a>
          </p>
          <p>
            <a
              href="#"
              className={styles.footerLink}
            >
              {t("accessibilityStatement")}
            </a>
          </p>
        </div>

        <p>
          ©{currentYear} {t("copyright")} <br /> {t("poweredBy")}{" "}
          <a
            href="https://www.taskflow-labs.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.footerLink}
          >
            Taskflow Labs
          </a>
        </p>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.form}>
          <p>{t("contactUs")}</p>
          <form>
            <input type="text" placeholder={t("name")} required />
            <input type="email" placeholder={t("email")} required />
            <textarea placeholder={t("messagePlaceholder")} />
            <button type="submit">{t("submit")}</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
