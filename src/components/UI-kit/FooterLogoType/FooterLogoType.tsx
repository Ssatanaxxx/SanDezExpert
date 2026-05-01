import Image from "next/image"
import styles from "./FooterLogoType.module.scss"
import Link from "next/link"

export const FooterLogoType = () => {

    return (
        <Link href="/"><Image src="/logotype/footerLogo.svg" className={styles.logotype} priority width={150} height={80} alt="SANDEZEXPERT - Дезинсекция в Астане" /></Link>
    )
}