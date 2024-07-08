import { useTranslation } from 'next-i18next';
import styles from './stylesheets/About.module.css'

export default function About() {
    const {t} = useTranslation();
    return (
        <div className={styles.container}>
            
            <div className={styles.quote}>

                <p>{t("quoteAbout")}</p>

            </div>
        </div>
    )
}