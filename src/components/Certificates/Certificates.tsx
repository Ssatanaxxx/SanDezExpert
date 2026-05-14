"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Search, ArrowLeft, ArrowRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Certificates.module.scss";
import { certificatesData } from "../../config/certificates";

export const Certificates = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

    return (
        <section className={styles.section} id="certificates">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Гарантия качества</span>
                    <h2 className={styles.title}>Лицензии и сертификаты</h2>
                    <p className={styles.subtitle}>
                        Мы работаем официально, используя только сертифицированные препараты.
                    </p>
                </div>

                <div className={styles.sliderContainer}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl,
                            nextEl,
                        }}
                        pagination={{
                            clickable: true,
                            el: `.${styles.pagination}`
                        }}
                        breakpoints={{
                            720: { slidesPerView: 2 },
                            1010: { slidesPerView: 3 },
                        }}
                        className={styles.swiper}
                    >
                        {certificatesData.map((cert) => (
                            <SwiperSlide key={cert.id}>
                                <motion.div
                                    className={styles.card}
                                    onClick={() => setSelectedImg(cert.image)}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.imageWrapper}>
                                        <div className={styles.overlay}>
                                            <Search color="white" size={32} />
                                            <span>Просмотр</span>
                                        </div>
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className={styles.image}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        <h3 className={styles.certTitle}>{cert.title}</h3>
                                        <p className={styles.certDesc}>{cert.description}</p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={styles.controlsContainer}>
                        <div className={styles.controls}>
                            <button
                                ref={(node) => setPrevEl(node)}
                                className={`${styles.navBtn} ${styles.prevBtn}`}
                            >
                                <ArrowLeft size={20} />
                            </button>

                            <div className={styles.pagination}></div>

                            <button
                                ref={(node) => setNextEl(node)}
                                className={`${styles.navBtn} ${styles.nextBtn}`}
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
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

            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.modal}
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className={styles.closeModal}><X size={32} /></button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}
                            style={{ position: 'relative', width: '90vw', height: '85vh' }}
                        >
                            <Image
                                src={selectedImg}
                                alt="Certificate Full"
                                fill
                                priority
                                className={styles.fullImage}
                                style={{ objectFit: 'contain' }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};