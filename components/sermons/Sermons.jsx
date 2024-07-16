import styles from './stylesheets/Sermons.module.css'
import { useTranslation } from 'next-i18next'
export default function Sermons() {
    const {t} = useTranslation();
    return (
        <div className={styles.container}>

            <div className={styles.quote}>

                <p>{t("quoteSermons")}</p>

            </div>
        </div>
    )
}