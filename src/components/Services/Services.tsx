'use client';
import { useState } from "react";
import styles from "./Services.module.scss";
import { servicesData } from "../../config/services";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import Link from "next/link";

export const Services = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className={styles.services} id="services">
            <div className={styles.servicesContainer}>
                <div className={styles.top}>
                    <span className={styles.badge}>Наши услуги</span>
                    <h2 className={styles.title}>Комплексные решения для вашей безопасности</h2>
                </div>

                <div
                    className={styles.flexGrid}
                    onMouseLeave={() => setActiveId(null)}
                >
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
                                        <service.icon size={28} strokeWidth={isActive ? 2 : 1.5} />
                                    </motion.div>

                                    <div className={styles.cardText}>
                                        <motion.h3 layout className={styles.cardTitle}>
                                            {service.title} <span>{service.subTitle}</span>
                                        </motion.h3>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <p className={styles.fullDescription}>
                                                        {service.description}
                                                    </p>

                                                    <div className={styles.cardFooter}>
                                                        <span className={styles.price}>{service.price.toLocaleString('ru-RU')} ₸</span>
                                                        <Link className={styles.orderBtn} href={"#quiz"}>Заказать</Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};