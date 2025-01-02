'use client';

import React, { useState, useEffect } from 'react';

const Herosection = () => {
    const [text, setText] = useState('');
    const words = ['Innovate', 'Create', 'Dominate'];
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
    }, [text, isDeleting, wordIndex]);

    return (
        <div className="relative min-h-[90vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden bg-black w-full">
            {/* Background gradients with reduced opacity on mobile */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/[0.07] to-orange-900/[0.07] md:from-orange-600/10 md:to-orange-900/15 animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.07),transparent_50%)] md:bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(194,65,12,0.07),transparent_50%)] md:bg-[radial-gradient(ellipse_at_bottom_right,rgba(194,65,12,0.08),transparent_50%)]"></div>
            </div>

            {/* Slower blob animations with reduced opacity on mobile */}
            <div className="absolute top-20 left-[5%] md:left-20 w-36 sm:w-48 md:w-64 lg:w-72 h-36 sm:h-48 md:h-64 lg:h-72 bg-orange-500/[0.07] md:bg-orange-500/5 rounded-full mix-blend-multiply filter blur-xl animate-[blob_10s_infinite]"></div>
            <div className="absolute top-40 right-[5%] md:right-20 w-36 sm:w-48 md:w-64 lg:w-72 h-36 sm:h-48 md:h-64 lg:h-72 bg-orange-700/[0.07] md:bg-orange-700/5 rounded-full mix-blend-multiply filter blur-xl animate-[blob_10s_infinite_3s]"></div>
            <div className="absolute -bottom-8 left-[10%] md:left-40 w-36 sm:w-48 md:w-64 lg:w-72 h-36 sm:h-48 md:h-64 lg:h-72 bg-orange-600/[0.07] md:bg-orange-600/5 rounded-full mix-blend-multiply filter blur-xl animate-[blob_10s_infinite_6s]"></div>

            {/* Grid background with different opacity for mobile and desktop */}
            <div
                className="absolute inset-0 md:bg-[linear-gradient(rgba(255,125,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,125,0,0.03)_1px,transparent_1px)] bg-[linear-gradient(rgba(255,125,0,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,125,0,0.006)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:36px_36px] md:bg-[size:48px_48px]"
                style={{
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                }}
            ></div>

            {/* Content container */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16 lg:py-20 z-10">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 select-text">
                        <span className="block mt-2 sm:mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-[fadeInUp_1s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                            <span className="text-orange-500 transition-colors duration-300">
                                {text}
                                <span
                                    className={`ml-1 text-white ${
                                        showCursor ? 'opacity-100' : 'opacity-0'
                                    } transition-opacity duration-100`}
                                >
                                    |
                                </span>
                            </span>{' '}
                            with Ample
                            <span className="text-orange-500">DIGI</span>.
                        </span>
                        <span className="block animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] mt-3 sm:mt-5">
                            Transforming Ideas Digitally.
                        </span>
                    </h1>

                    <div className="mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 animate-[fadeInUp_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards] select-text">
                        <p>Elevate your digital presence with cutting-edge solutions.</p>
                        <div className="mt-2">No Calls. No BS. Just Results.</div>
                    </div>

                    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 animate-[fadeInUp_1s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
                        <button className="relative z-20 px-6 py-2 text-lg font-semibold rounded bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] active:scale-95 cursor-pointer select-none">
                            Let&apos;s talk
                        </button>
                    </div>

                    <div className="mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto text-sm sm:text-base text-gray-300 animate-[fadeInUp_1s_ease-out_0.9s] opacity-0 [animation-fill-mode:forwards] select-text">
                        <p>Trusted by Founders and Entrepreneurs from all over the world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herosection;
