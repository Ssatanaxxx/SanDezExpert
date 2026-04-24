import Link from 'next/link';
import { Logotype } from "@/components/UI-kit/Logotype/Logotype";
import styles from './Footer.module.scss';
import { MapPin, Phone, Mail, Send } from "lucide-react" // Instagram
import { Navigation } from "@/components/UI-kit/Navigation/Navigation";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="container">
            <div className={styles.grid}>

                <div className={styles.brand}>
                    <Logotype />
                    <p className={styles.description}>
                        Профессиональная санитарная служба по всему РК.
                        Уничтожаем вредителей с гарантией результата.
                        Безопасно для семьи и бизнеса.
                    </p>
                </div>

                <ul className={styles.nav}>
                    <Navigation />
                </ul>

                <div className={styles.contacts}>
                    <h4>Свяжитесь с нами</h4>
                    <div className={styles.item}>
                        <MapPin size={18} />
                        <span>г. Астана, пр. Мангилик Ел, 17</span>
                    </div>
                    <div className={styles.item}>
                        <Phone size={18} />
                        <a href="tel:+77471441031">+7 (747) 144-10-31</a>
                    </div>
                    <div className={styles.item}>
                        <Mail size={18} />
                        <span>dinaro_84@mail.ru</span>
                    </div>
                </div>

                <div className={styles.social}>
                    <h4>Мы в соцсетях</h4>
                    <div className={styles.icons}>
                        <a href="#" className={styles.icon} aria-label="Instagram"></a>  {/* <Instagram />  */}
                        <a href="#" className={styles.icon} aria-label="Telegram"><Send /></a>
                        <a href="#" className={styles.icon} aria-label="TikTok"><Send /></a>
                        <span className={styles.tooltip}>Работаем круглосуточно</span>
                    </div>
                </div>

            </div>

            <div className={styles.bottom}>
                <span>© {currentYear} SANDEZEXPERT. Все права защищены.</span>
                <Link href="/privacy">Политика конфиденциальности</Link>
            </div>
        </div>
    );
};