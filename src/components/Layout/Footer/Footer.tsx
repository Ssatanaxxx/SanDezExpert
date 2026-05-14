import { Navigation } from "../../UI-kit/Navigation/Navigation";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Send,
    Music2,
    Camera
} from "lucide-react";
import styles from "./Footer.module.scss";
import { FooterLogoType } from "@/components/UI-kit/FooterLogoType/FooterLogoType";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <FooterLogoType />
                        <p className={styles.brandText}>
                            Профессиональная дезинсекция в Астане.
                            Используем передовые технологии для защиты вашего дома и бизнеса.
                        </p>
                        <p className={styles.brandText}>
                            ИП Курмангалиева Динара Маратовна
                            ИНН 841016450631
                        </p>

                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/dez_arsenal/p/CrJeTwvtLNa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Camera size={22} />
                            </a>
                            <a href="https://wa.me/77471441031" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <MessageCircle size={22} />
                            </a>
                            <a href="https://web.telegram.org/a/#8993208192" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <Send size={22} />
                            </a>
                            <a href="https://tiktok.com/@ваш_профиль" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <Music2 size={22} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.nav}>
                        <h4 className={styles.title}>Навигация</h4>
                        <ul className={styles.navList}>
                            <Navigation />
                        </ul>
                    </div>

                    <div className={styles.contacts}>
                        <h4 className={styles.title}>Контакты</h4>
                        <div className={styles.contactItem}>
                            <Phone size={18} className={styles.icon} />
                            <a href="tel:+77471441031">+7 747 144 1031</a>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={18} className={styles.icon} />
                            <a href="mailto:sandezexpert@gmail.com">sandezexpert@gmail.com</a>
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
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" aria-label="Politic">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};