import styles from './stylesheets/Banner.module.css'
import { useTranslation } from 'next-i18next'

export default function Banner(){

    const {t} = useTranslation();

    return (
        <div className={styles.Banner}>
            <div>
                <h2>{t("bannerSermons")}</h2>
            </div>
        </div>
    )
}