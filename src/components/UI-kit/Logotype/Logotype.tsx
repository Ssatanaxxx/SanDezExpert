import Image from "next/image"
import styles from "./Logotype.module.scss"

export const Logotype = () => {

    return (
        <Image src="/logotype.svg" className={styles.logotype} priority width={160} height={60} alt="SANDEZEXPERT - Дезинсекция в Астане" />
    )
}