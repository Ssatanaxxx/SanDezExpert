"use client"

import { Logotype } from "@/components/UI-kit/Logotype/Logotype";
import { Navigation } from "@/components/UI-kit/Navigation/Navigation";
import { ContactActions } from "@/components/UI-kit/ContactActions/ContactActions";
import { useScroll } from "@/hooks/useScrolls";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
    const isScroll = useScroll()

    return (
        <header className={`${styles.header} ${isScroll ? styles.scrolled : ""}`}>
            <div className="container">
                <div className={styles.inner}>
                     <Link href="/"  rel="noopener noreferrer"> {/* Добавить сюда reqs */}
                        <Logotype />
                    </Link>
                    <nav>
                        <ul>
                            <Navigation />
                        </ul>
                    </nav>
                    <ContactActions />
                </div>
            </div>
        </header>
    );
};


export default Header;


