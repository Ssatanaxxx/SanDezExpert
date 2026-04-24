import styles from "./ButtonSliderNav.module.scss"
import { ChevronLeft, ChevronRight } from "lucide-react"


interface ButtonSliderNavProps {
    onPrev: () => void;
    onNext: () => void;
}

export const ButtonSliderNav = ({ onPrev, onNext }: ButtonSliderNavProps) => {

    return (
        <div className={styles.buttonSliderContainer}>
            <button onClick={onPrev} className={styles.buttonSlider} aria-label="Назад">< ChevronLeft size={24} /></button>
            <button onClick={onNext} className={styles.buttonSlider} aria-label="Вперёд">< ChevronRight size={24} /></button>
        </div>
    )
}