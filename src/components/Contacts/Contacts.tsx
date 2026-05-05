'use client';
import React, { useState } from 'react';
import styles from './Contacts.module.scss';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contacts = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <section className={styles.contacts} id="contacts">
            <div className={styles.container}>
                <div className={styles.grid}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.info}
                    >
                        <span className={styles.badge}>Связаться с нами</span>
                        <h2>Мы всегда на связи, чтобы помочь вам</h2>

                        <div className={styles.contactItems}>
                            <div className={styles.item}>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <address className={styles.text}>
                                    <h4>Наш адрес</h4>
                                    <p>Казахстан, г. Астана, ул. Профессиональная, 10</p>
                                </address>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div className={styles.text}>
                                    <h4>Телефон</h4>
                                    <a href="tel:+77471441031">+7 (747) 144 1031</a>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div className={styles.text}>
                                    <h4>E-mail</h4>
                                    <a href="mailto:info@sandezexpert.kz">info@sandezexpert.kz</a>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.iconBox}><Clock size={24} /></div>
                                <div className={styles.text}>
                                    <h4>Режим работы</h4>
                                    <p>Пн-Вс: 09:00 – 21:00 (Без выходных)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.formCard}
                    >
                        <h3>Оставьте заявку</h3>
                        <p className={styles.subtitle}>Менеджер перезвонит вам в течение 10 минут</p>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input name="name" type="text" placeholder="Ваше имя" required />
                            </div>
                            <div className={styles.formGroup}>
                                <input name="phone" type="tel" placeholder="Номер телефона" required />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea name="message" placeholder="Какая услуга вас интересует?"></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                {status === 'loading' ? 'Отправка...' : 'Отправить запрос'}
                            </button>

                            {status === 'success' && (
                                <p style={{ color: '#22c55e', marginTop: '15px', fontWeight: '600' }}>
                                    Спасибо! Мы скоро свяжемся с вами.
                                </p>
                            )}
                            {status === 'error' && (
                                <p style={{ color: '#ef4444', marginTop: '15px', fontWeight: '600' }}>
                                    Произошла ошибка. Попробуйте еще раз.
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};