'use client';
import React, { useState, useRef } from 'react';
import styles from './Contacts.module.scss';
import { MapPin, Phone} from 'lucide-react';
import { motion } from 'framer-motion';
import { handleOrder } from "@/app/actions/sendEmail";

export const Contacts = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate-limit'>('idle');
    const [errorMessage, setErrorMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/[^0-9+-\s]/g, '');
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            const result = await handleOrder(formData);

            if (result?.success) {
                setStatus('success');
                formRef.current?.reset();
            } else {
                setErrorMessage(result?.error || "Произошла ошибка");
                setStatus(result?.error?.includes('минуту') ? 'rate-limit' : 'error');
            }
        } catch (error) {
            setErrorMessage("Произошла техническая ошибка." + error);
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
                        className={styles.info}
                    >
                        <span className={styles.badge}>Связаться с нами</span>
                        <h2>Мы всегда на связи, чтобы помочь вам</h2>
                        <div className={styles.contactItems}>
                            <div className={styles.item}>
                                <div className={styles.iconBox}><MapPin /></div>
                                <div className={styles.text}>
                                    <h4>Наш адрес</h4>
                                    <p>Казахстан, г. Астана, ул. Профессиональная, 10</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}><Phone /></div>
                                <div className={styles.text}>
                                    <h4>Телефон</h4>
                                    <a href="tel:+77471441031">+7 (747) 144 1031</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        className={styles.formCard}
                    >
                        <h3>Оставьте заявку</h3>
                        <form ref={formRef} onSubmit={onSubmit}>
                            <input type="text" name="website_trap" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                            <div className={styles.formGroup}>
                                <input name="userName" type="text" placeholder="Ваше имя" required minLength={2} />
                            </div>
                            <div className={styles.formGroup}>
                                <input 
                                    name="userPhone" 
                                    type="tel" 
                                    placeholder="Номер телефона" 
                                    required 
                                    onChange={handlePhoneInput}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <textarea name="serviceName" placeholder="Какая услуга вас интересует?" maxLength={500}></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                {status === 'loading' ? 'Отправка...' : 'Отправить запрос'}
                            </button>

                            {status === 'success' && (
                                <p className={styles.successMsg}>Спасибо! Заявка принята.</p>
                            )}
                            {(status === 'error' || status === 'rate-limit') && (
                                <p className={styles.errorMsg}>{errorMessage}</p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};