import { Logotype } from "../../UI-kit/Logotype/Logotype";
import { Navigation } from "../../UI-kit/Navigation/Navigation";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    {/* Блок 1: Лого и описание */}
                    <div className={styles.brand}>
                        <Logotype />
                        <p className={styles.brandText}>
                            Профессиональная дезинсекция в Астане.
                            Используем передовые технологии для защиты вашего дома и бизнеса.
                        </p>
                        <div className={styles.socials}>
                            {/* <a href="#" aria-label="Instagram"><Instagram size={20} /></a> */}
                            <a href="#" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    {/* Блок 2: Навигация */}
                    <div className={styles.nav}>
                        <h4 className={styles.title}>Навигация</h4>
                        <ul>
                            <Navigation />
                        </ul>
                    </div>

                    {/* Блок 3: Контакты */}
                    <div className={styles.contacts}>
                        <h4 className={styles.title}>Контакты</h4>
                        <div className={styles.contactItem}>
                            <Phone size={18} className={styles.icon} />
                            <a href="tel:+77471441031">+7 747 144 1031</a>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={18} className={styles.icon} />
                            <a href="mailto:info@sandezexpert.kz">info@sandezexpert.kz</a>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} className={styles.icon} />
                            <span>г. Астана, ул. Профессиональная, 10</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {currentYear} SANDEZEXPERT. Все права защищены.</p>
                    <div className={styles.legal}>
                        <a href="/privacy">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};