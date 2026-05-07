"use client"
import Image from "next/image"
import styles from "./Logotype.module.scss"
import Link from "next/link"
import { FC } from "react";

interface LogotypeProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Logotype: FC<LogotypeProps> = ({onClick}) => {

    return (
        <div className={styles.logotype} onClick={onClick}>
            <Link href="/"><Image src="/logotype/logotype.svg" className={styles.logotype} priority width={150} height={80} alt="SANDEZEXPERT - Дезинсекция в Астане" /></Link>
        </div>
    )
}