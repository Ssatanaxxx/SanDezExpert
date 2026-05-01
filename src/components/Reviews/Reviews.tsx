import styles from "./Reviews.module.scss";
import { reviewsData } from "../../config/reviews";
import { Star, Quote, MessageCircle } from "lucide-react";

export const Reviews = () => {
    return (
        <section className={styles.reviews} id="reviews">
            <div className="container">
                <div className={styles.top}>
                    <span className={styles.badge}>Отзывы</span>
                    <h2 className={styles.title}>Что говорят наши клиенты в Астане</h2>
                </div>

                <div className={styles.grid}>
                    {reviewsData.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.stars}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                                    ))}
                                </div>
                                <Quote className={styles.quoteIcon} size={24} />
                            </div>

                            <p className={styles.text}>«{review.text}»</p>

                            <div className={styles.cardFooter}>
                                <div className={styles.info}>
                                    <span className={styles.name}>{review.name}</span>
                                    <span className={styles.service}>{review.service}</span>
                                </div>
                                <span className={styles.date}>{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.action}>
                    <p>Остались вопросы или хотите заказать обработку?</p>
                    <a href="https://wa.me/77471441031" target="_blank" className={styles.waBtn}>
                        <MessageCircle size={20} style={{ marginRight: '10px' }} />
                        Написать мастеру в WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};