import React from 'react';
import Herosection from '@/components/home/Herosection';
import Navbar from '@/components/shared/Navbar';

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start min-w-screen overflow-x-hidden">
            <Navbar />
            <Herosection />
        </main>
    );
};

export default page;
