'use client';

import { motion } from "framer-motion";
import styles from './PromoMarquee.module.scss';

export const PromoMarquee = () => {
  const phrase = "АКЦИЯ! СКИДКА 10% НА ПЕРВЫЙ ВЫЗОВ — ";

  const duplicatedPhrases = Array(4).fill(phrase);

  return (
    <section className={styles.marquee} id="promo">
      <motion.div
        className={styles.track}
        animate={{ x: "-50%" }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedPhrases.map((text, index) => (
          <span key={index} className={styles.sallery}>
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
};