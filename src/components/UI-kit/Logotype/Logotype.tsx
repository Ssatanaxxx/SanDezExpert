import Image from "next/image"
import styles from "./Logotype.module.scss"

export const Logotype = () => {

    return (
        <Image src="/logotype/logotype.svg" className={styles.logotype} priority width={150} height={80} alt="SANDEZEXPERT - Дезинсекция в Астане" />
    )
}