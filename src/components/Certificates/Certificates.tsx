"use client"

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Award, Search } from "lucide-react";
import styles from "./Certificates.module.scss";
import { certificatesData } from "../../config/certificates";
import Image from "next/image";

export const Certificates = () => {
    return (
        <section className={styles.section} id="certificates">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Гарантия качества</span>
                    <h2 className={styles.title}>Лицензии и сертификаты</h2>
                    <p className={styles.subtitle}>
                        Мы работаем официально, используя только сертифицированные препараты,
                        безопасные для людей и домашних животных.
                    </p>
                </div>

                <div className={styles.grid}>
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <div className={styles.overlay}>
                                    <Search color="white" size={32} />
                                    <span>Увеличить</span>
                                </div>

                                {cert.image ? (
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                ) : (
                                    <div className={styles.placeholder}>
                                        <FileText size={48} />
                                        <span>Документ на проверке</span>
                                    </div>
                                )}
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.certTitle}>{cert.title}</h3>
                                <p className={styles.certDesc}>{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.trustFooter}>
                    <div className={styles.trustItem}>
                        <ShieldCheck className={styles.icon} />
                        <span>100% Безопасно</span>
                    </div>
                    <div className={styles.trustItem}>
                        <Award className={styles.icon} />
                        <span>Работа по договору</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;