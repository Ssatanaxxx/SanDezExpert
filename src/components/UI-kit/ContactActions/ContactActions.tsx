import { Phone, MessageCircle } from "lucide-react"
import styles from "./ContactActions.module.scss"
export const ContactActions = () => {

    return (
        <div className={styles.header__contactActions}>
            <a href="https://wa.me/77471441031" target="_blank" rel="noopener noreferrer" className={styles.header__whatsapp}>
                <MessageCircle size={22} className={styles.WhatsAppIcon} />
                <span className={styles.tooltip}>Свяжитесь с нами в WhatsApp</span>
            </a>
            <a href="tel:77471441031" target="_blank" rel="noopener noreferrer" className={styles.header__phone}>
                <Phone size={22} className={styles.phoneIcon} />
                +7 747 144 1031
            </a>
            <span className={styles.tooltip}>Работаем круглосуточно</span>
        </div>

    )
}