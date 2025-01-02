import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={`${className} mx-auto px-4 md:px-10 max-w-[1800px]`}>{children}</div>;
};

export default Container;
