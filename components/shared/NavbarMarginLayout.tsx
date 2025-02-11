'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/shared/Navbar';

interface NavbarMarginLayoutProps {
    children: React.ReactNode;
}

const NavbarMarginLayout: React.FC<NavbarMarginLayoutProps> = ({ children }) => {
    const [navbarHeight, setNavbarHeight] = useState<number | null>(null);

    useEffect(() => {
        const updateNavbarHeight = () => {
            const upperNavbar = document.querySelector('.bg-gradient-to-r');
            const lowerNavbar = document.querySelector('.bg-background');

            let totalHeight = 0;

            if (upperNavbar) {
                totalHeight += upperNavbar.getBoundingClientRect().height;
            }
            if (lowerNavbar) {
                totalHeight += lowerNavbar.getBoundingClientRect().height;
            }

            if (totalHeight > 0) {
                setNavbarHeight(totalHeight);
            }
        };

        // Immediate measurement
        updateNavbarHeight();

        // Backup measurement after a short delay
        const timeoutId = setTimeout(updateNavbarHeight, 100);

        // Set up resize observer for responsive adjustments
        const resizeObserver = new ResizeObserver(updateNavbarHeight);
        resizeObserver.observe(document.body);

        return () => {
            clearTimeout(timeoutId);
            resizeObserver.disconnect();
        };
    }, []);

    console.log(navbarHeight)

    return (
        <div className="relative">
            <Navbar />
            <div
                className="transition-[padding] duration-200"
                style={{
                    paddingTop: navbarHeight ? `${navbarHeight+24}px` : 'var(--navbar-height-fallback, 110px)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default NavbarMarginLayout;
