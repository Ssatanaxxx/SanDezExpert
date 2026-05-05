import styles from "./AboutUs.module.scss";
import { aboutFeatures } from "../../config/about";

export const AboutUs = () => {
    return (
        <section className={styles.about} id="about-us">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <span className={styles.badge}>О компании</span>
                        <h2 className={styles.title}>
                            Заботимся о чистоте вашего дома в <span>Астане</span> с 2019 года
                        </h2>
                        <p className={styles.description}>
                            SANDEZEXPERT — это не просто дезинсекция. Мы понимаем, как важно чувствовать себя в безопасности в собственном доме. Поэтому мы отказались от дешевых токсичных препаратов в пользу современных европейских технологий.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNum}>5000+</span>
                                <span className={styles.statLabel}>Чистых объектов</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.statItem}>
                                <span className={styles.statNum}>15</span>
                                <span className={styles.statLabel}>Опытных мастеров</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.features}>
                        {aboutFeatures.map((item) => (
                            <div key={item.id} className={styles.featureCard}>
                                <div className={styles.iconBox}>
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className={styles.featureTitle}>{item.title}</h3>
                                <p className={styles.featureDescr}>{item.descr}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};