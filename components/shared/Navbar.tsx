import Link from 'next/link';
import Button from './Button';
import Container from './Container';
import Navlinks from './Navlinks';

const Navbar = () => {
    return (
        <div className="w-full fixed z-40 top-0">
            <div className="py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <Container className="flex justify-between items-center">
                    <Link href='/' className="text-2xl font-medium">AmpleDIGI</Link>
                    <Navlinks />
                    <Button className="" primary navbar>
                        Let&apos;s talk
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
