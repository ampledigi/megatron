import NavbarMarginLayout from "@/components/shared/NavbarMarginLayout";

interface RoutesLayoutProps {
    children: React.ReactNode;
}

const RoutesLayout: React.FC<RoutesLayoutProps> = ({ children }) => {
    return (
        <NavbarMarginLayout>
            <main className="flex flex-col items-center justify-start w-full overflow-x-hidden">
                {children}
            </main>
        </NavbarMarginLayout>
    );
};

export default RoutesLayout;
