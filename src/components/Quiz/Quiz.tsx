'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizSteps } from "../../config/quiz";
import styles from "./Quiz.module.scss";



export const Quiz = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [step]: value });
        if (step < quizSteps.length - 1) {
            setStep(step + 1);
        } else {
            setIsFinished(true);
        }
    };



    const progress = ((step + 1) / quizSteps.length) * 100;

    return (
        <section className={styles.quiz} id="quiz">
            <div className="container">
                <div className={styles.quizWrapper}>
                    {!isFinished ? (
                        <>
                            <div className={styles.header}>
                                <h2 className={styles.title}>Рассчитайте стоимость обработки за 30 секунд</h2>
                                <div className={styles.progressContainer}>
                                    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                                </div>
                                <p className={styles.stepCounter}>Вопрос {step + 1} из {quizSteps.length}</p>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.questionBlock}
                                >
                                    <h3 className={styles.question}>{quizSteps[step].question}</h3>
                                    <div className={styles.optionsGrid}>
                                        {quizSteps[step].options.map((opt) => (
                                            <button
                                                key={opt.value}
                                                className={styles.optionBtn}
                                                onClick={() => handleAnswer(opt.value)}
                                            >
                                                {opt.icon && <span className={styles.icon}>{opt.icon}</span>}
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </>
                    ) : (
                        <div className={styles.finalStep}>
                            <h3>Отлично! Мы почти закончили.</h3>
                            <p>Оставьте номер, и мастер пришлет расчет стоимости в WhatsApp</p>
                            <form className={styles.form}>
                                <input type="tel" placeholder="+7 (___) ___-__-__" className={styles.input} required />
                                <button type="submit" className={styles.submitBtn}>Получить расчет в WhatsApp</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};