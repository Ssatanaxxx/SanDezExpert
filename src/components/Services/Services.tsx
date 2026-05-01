'use client';
import { useState } from "react";
import styles from "./Services.module.scss";
import { servicesData } from "../../config/services";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export const Services = () => {
    const [activeId, setActiveId] = useState<string | null>(servicesData[0].id);

    return (
        <section className={styles.services} id="services">
            <div className="container">
                <div className={styles.top}>
                    <span className={styles.badge}>Наши услуги</span>
                    <h2 className={styles.title}>Комплексные решения для вашей безопасности</h2>
                </div>

                <div className={styles.flexGrid}>
                    {servicesData.map((service) => {
                        const isActive = activeId === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                layout
                                className={clsx(styles.card, isActive && styles.active)}
                                onMouseEnter={() => setActiveId(service.id)}
                                onClick={() => setActiveId(service.id)}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                <div className={styles.cardContent}>
                                    <motion.div layout className={styles.iconWrapper}>
                                        <service.icon size={isActive ? 32 : 28} strokeWidth={1.5} className={styles.icon} />
                                    </motion.div>

                                    <div className={styles.cardText}>
                                        <motion.h3 layout className={styles.cardTitle}>
                                            {service.title} <span>{service.subTitle}</span>
                                        </motion.h3>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, y: 10 }}
                                                    animate={{ opacity: 1, height: "auto", y: 0 }}
                                                    exit={{ opacity: 0, height: 0, y: 10 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                >
                                                    <p className={styles.fullDescription}>
                                                        {service.description}
                                                    </p>

                                                    <div className={styles.cardFooter}>
                                                        <span className={styles.price}>от {service.price.toLocaleString()} ₸</span>
                                                        <button className={styles.orderBtn}>Заказать услугу</button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <motion.div 
                                    layout
                                    className={styles.bottomLine} 
                                    animate={{ width: isActive ? 60 : 35 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};