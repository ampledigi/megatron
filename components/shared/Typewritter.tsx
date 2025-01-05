'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530); // Blink speed
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const typeSpeed = isDeleting ? 100 : 200;
        const currentWord = words[wordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (text === currentWord) {
                    // Pause at end of word
                    setTimeout(() => setIsDeleting(true), 1500);
                    return;
                }
                setText(currentWord.substring(0, text.length + 1));
            } else {
                if (text === '') {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                    return;
                }
                setText(currentWord.substring(0, text.length - 1));
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <span className="text-orange-500 transition-colors duration-300">
            {text}
            <span
                className={`ml-1 text-white ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-100`}
            >
                |
            </span>
        </span>
    );
};

export default Typewriter;
