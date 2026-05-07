"use client"

import { Logotype } from "@/components/UI-kit/Logotype/Logotype";
import { Navigation } from "@/components/UI-kit/Navigation/Navigation";
import { ContactActions } from "@/components/UI-kit/ContactActions/ContactActions";
import { useScroll } from "@/hooks/useScrolls";
import styles from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
    const isScroll = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        const nextState = !isMenuOpen;
        setIsMenuOpen(nextState);
        // Используем nextState, так как состояние обновится не мгновенно
        document.body.style.overflow = nextState ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <header className={`${styles.header} ${isScroll ? styles.scrolled : ""} ${isMenuOpen ? styles.headerOpen : ""}`}>
                <div className="container">
                    <div className={styles.inner}>
                        <Logotype onClick={closeMenu} />

                        <nav className={styles.desktopNav}>
                            <ul>
                                <Navigation />
                            </ul>
                        </nav>

                        <div className={styles.actions}>
                            <ContactActions />
                            
                            <button 
                                className={`${styles.burger} ${isMenuOpen ? styles.active : ""}`}
                                onClick={toggleMenu}
                                aria-label="Меню"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
                <nav className={styles.mobileNav}>
                    <ul onClick={closeMenu}>
                        <Navigation />
                    </ul>
                </nav>
            </div>

            <div 
                className={`${styles.overlay} ${isMenuOpen ? styles.visible : ""}`} 
                onClick={closeMenu}
            />
        </>
    );
};

export default Header;