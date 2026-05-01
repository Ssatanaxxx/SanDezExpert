'use client';
import styles from "./Hero.module.scss";
import { useState, useEffect, useCallback } from "react";
import { ButtonSliderNav } from "../UI-kit/ButtonSliderNav/ButtonSliderNav";
import { AnimatePresence, motion } from "framer-motion";
import { heroAnimation } from "@/config/heroAnimation";
import Image from "next/image"

export const Hero = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const activeIndex = Math.abs(page % heroAnimation.length);
    const [isPaused, setIsPaused] = useState(false);

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    useEffect(() => {
        if (isPaused) return;

        const slideShow = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(slideShow);
    }, [paginate, isPaused]);

    const slide = heroAnimation[activeIndex];

    return (
        <section className={styles.hero} id="services" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <Image
                src="/HomeBG.jpg"
                alt=""
                fill
                priority
                quality={100}
                className={styles.backgroundImage}
            />
            <div className="container">
                <div className={styles.heroContainer}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction < 0 ? 30 : -30 }}
                            transition={{ duration: 0.4 }}
                            className={styles.heroSliderGrid}
                        >
                            <div className={styles.heroInfo}>
                                <span className={styles.heroPreTitle}>ПРОФЕССИОНАЛЬНО И БЕЗОПАСНО</span>
                                <h1 className={styles.heroTitle}>{slide.title}</h1>
                                
                                <p className={styles.heroDescription}>
                                    Избавим ваш дом, офис или предприятие от насекомых, грибка, плесени и бактерий. 
                                    Гарантируем безопасность для людей и животных.
                                    {/* не придумал, что написать */}
                                </p>

                                <div className={styles.heroActions}>
                                    <button className={styles.btnPrimary}>Рассчитать стоимость</button>
                                    <button className={styles.btnSecondary}>Наши услуги</button>
                                </div>
                            </div>

                            <div className={styles.heroVisual}>
                                <div className={styles.heroImage}>
                                    <Image 
                                        src={slide.image} 
                                        alt={slide.master} 
                                        fill 
                                        priority 
                                        className={styles.masterImg} 
                                    />
                                    <div className={styles.heroNavigation}>
                                        <ButtonSliderNav onPrev={() => paginate(-1)} onNext={() => paginate(1)} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};