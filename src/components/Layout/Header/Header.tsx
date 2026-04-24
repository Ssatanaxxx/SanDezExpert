import { Logotype } from "@/components/UI-kit/Logotype/Logotype";
import { Navigation } from "@/components/UI-kit/Navigation/Navigation";
import { ContactActions } from "@/components/UI-kit/ContactActions/ContactActions";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" rel="noopener noreferrer">
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