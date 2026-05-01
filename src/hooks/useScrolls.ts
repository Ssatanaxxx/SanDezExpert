"use client"
import { useState, useEffect } from "react";

export const useScroll = (threshold=55) => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > threshold) {
                setIsScroll(true);
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    },[threshold])

    return isScroll;
}

export default useScroll