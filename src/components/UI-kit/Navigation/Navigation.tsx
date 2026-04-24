'use client'

import { navLinks } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation"
import styles from "./Navigation.module.scss"
export const Navigation = () => {
    const pathName = usePathname();

    return (
        <>
            {navLinks.map((links) => (
                <li key={links.href}>
                    <Link href={links.href}
                        className={`${styles.links} ${pathName === links.href ? styles.active : ''}`}>
                        {links.name}
                    </Link>
                </li>
            ))}
        </>
    )
}