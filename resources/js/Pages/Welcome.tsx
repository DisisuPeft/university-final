// import { PageProps } from '@/types';
import CursosDestacados from '@/ui/CursosDestacados';
import Features from '@/ui/Features';
import Footer from '@/ui/Footer';
import Header from '@/ui/Header';
import Hero from '@/ui/Hero';
import Testimonios from '@/ui/Testimonios';
// import { Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <CursosDestacados />
            <Testimonios />
            <Footer />
        </>
    );
}
