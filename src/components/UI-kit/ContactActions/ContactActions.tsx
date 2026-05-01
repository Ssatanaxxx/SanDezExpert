import { Phone } from "lucide-react"
import styles from "./ContactActions.module.scss";
import Image from "next/image";
export const ContactActions = () => {

    return (
        <div className={styles.header__contactActions}>
            <a href="https://wa.me/77471441031" target="_blank" rel="noopener noreferrer" className={styles.header__whatsapp}>
                <Image src={"/whatsapp.svg"} alt="icon whatsapp" width={32} height={32} className={styles.WhatsAppIcon} />
                <span className={styles.tooltip}>Свяжитесь с нами в WhatsApp</span>
            </a>

            <a href="tel:77471441031" className={styles.header__phone}>
                <Phone size={22} className={styles.phoneIcon} />
                {`+7 747 144 1031`}
                <span className={styles.tooltip}>Работаем круглосуточно</span>
            </a>
        </div>

    )
}