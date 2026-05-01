import Image from "next/image"
import styles from "./Logotype.module.scss"
import Link from "next/link"

export const Logotype = () => {

    return (
        <Link href="/"><Image src="/logotype/logotype.svg" className={styles.logotype} priority width={150} height={80} alt="SANDEZEXPERT - Дезинсекция в Астане" /></Link>
    )
}