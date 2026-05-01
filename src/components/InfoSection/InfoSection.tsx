import React from 'react';
import styles from './InfoSection.module.scss';
import Image from 'next/image';

const CarIcon = () => {
    return (
        <Image alt='car' fill src={"/image/WhatsApp Image 2026-04-24 at 15.56.28 (1).jpeg"} />

    )
}

export const InfoSection = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.banner}>

                    <div className={styles.content}>
                        <h2>Работаем по всем районам города и области</h2>
                        <div className={styles.description}>
                            <p>Выезжаем в день обращения.</p>
                            <p>Анонимно и конфиденциально.</p>
                        </div>
                    </div>

                    <div className={styles.carWrapper}>
                        <CarIcon />
                    </div>

                </div>
            </div>
        </section>
    );
};