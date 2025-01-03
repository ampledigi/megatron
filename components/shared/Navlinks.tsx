import Activelink from './Activelink';

const Navlinks = () => {
    return (
        <div className="hidden lg:flex gap-10 text-xs xl:text-sm 2xl:text-base">
            <Activelink href="/portfolio" text="Portfolio" />
            <Activelink href="/services" text="Services" />
            <Activelink href="/technologies" text="Technologies" />
            <Activelink href="/case-study" text="Case Studies" />
            <Activelink href="/blog" text="Blog" />
            <Activelink href="/about-us" text="About Us" />
            <Activelink href="/contact-us" text="Contact Us" />
        </div>
    );
};

export default Navlinks;
