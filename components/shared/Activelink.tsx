'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActivelinkProps {
    href: string;
    text: string;
    className?: string;
    onClick?: () => void;
}

const Activelink: React.FC<ActivelinkProps> = ({ href, text, className, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                ${isActive ? 'text-orange-500 font-semibold' : ''}
                ${className}
            `}
            onClick={onClick}
        >
            {text}
        </Link>
    );
};

export default Activelink;
