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
        <section
            className={styles.hero}
            aria-roledescription="carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container">
                <div className={styles.heroContainer} aria-live="polite">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction < 0 ? 50 : -50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={styles.heroSliderGrid}
                        >
                            <div className={styles.heroInfo}>
                                <h1 className={styles.heroTitle}>{slide.title}</h1>
                                <div className={styles.heroQuoteBlock}>
                                    <p className={styles.heroQuoteDescr}>«{slide.quote}»</p>
                                    <span className={styles.heroQuoteName}>- {slide.master}</span>
                                </div>
                                <div className={styles.heroQuoteFooter}>
                                    <button className={styles.heroQuoteFooterBtn}>Рассчитать стоимость</button>
                                    <p className={styles.heroQuoteFooterDescr}>
                                        от <span className={styles.heroQuoteFooterPrice}>{slide.price} ₸</span>
                                    </p>
                                </div>
                            </div>

                            <div className={styles.heroVisual}>
                                <div className={styles.heroImage}>
                                    {slide.image ? (
                                        <Image src={slide.image} priority alt={slide.master} width={500} height={300} />
                                    ) : (
                                        <div className={styles.skeleton}>
                                            <span>Фото мастера {slide.master}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.heroNavigationWrapp}>
                        <ButtonSliderNav onPrev={() => paginate(-1)} onNext={() => paginate(1)} />
                    </div>
                </div>
            </div>
        </section>
    );
};