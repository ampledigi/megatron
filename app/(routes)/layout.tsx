import NavbarMarginLayout from '@/components/shared/NavbarMarginLayout';

interface RoutesLayoutProps {
    children: React.ReactNode;
}

const RoutesLayout: React.FC<RoutesLayoutProps> = ({ children }) => {
    return (
        <NavbarMarginLayout>
            <main className="flex flex-col items-center justify-start w-full overflow-x-hidden min-h-screen">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/[0.04] to-orange-900/[0.04] md:from-orange-600/5 md:to-orange-900/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.07),transparent_50%)] md:bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_50%)]"></div>
                </div>
                {children}
            </main>
        </NavbarMarginLayout>
    );
};

export default RoutesLayout;
