import React from "react";
import styles from "./stylesheets/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.Footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerText}>Ottawa christian Tabernacle</div>
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
              Terms & Conditions
            </a>
          </p>
          <p>
            <a
              href="#"
              className={styles.footerLink}
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href="#"
              className={styles.footerLink}
            >
              Accessibility Statement
            </a>
          </p>
        </div>

        <p>
          ©{currentYear} by Ottawa christian tabernacle. <br /> Powered and secured by{" "}
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
          <p>Write Us</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type your message here..." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
