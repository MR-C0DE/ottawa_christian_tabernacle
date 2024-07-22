import Image from "next/image"
import lacroix from '../../../../public/images/croix2.jpeg'
import styles from './stylesheets/Login.module.css'

export default function Login() {

    return <div className={styles.bg}>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src={lacroix} alt="croix" />
            </div>
            <div className={styles.form}>
                <h1><span>Hello</span>, Guyss!</h1>
                <form>
                    <h2>Login</h2>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button type="submit" className={styles.btn}>Login</button>
                </form>
            </div>
        </div>
    </div>
}