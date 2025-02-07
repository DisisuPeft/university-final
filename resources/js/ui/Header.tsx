// import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="bg-white px-6 py-4 shadow-2xl w-full">
            <div className="container mx-auto flex items-center justify-between">
                <Link
                    href={route('landing')}
                    className="text-primary text-2xl font-bold"
                >
                    Educational platform
                </Link>
                <div className="flex flex-row p-2">
                    <nav className="pr-[50px] flex items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href="#features"
                                    className="hover:text-primary text-black"
                                >
                                    Características
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#cursos"
                                    className="hover:text-primary text-black"
                                >
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#testimonios"
                                    className="hover:text-primary text-black"
                                >
                                    Testimonios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contacto"
                                    className="hover:text-primary text-black"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href={route('login')} className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900" as="button" type='button'>
                        Iniciar Sesión
                    </Link>
                    {/* <PrimaryButton>Iniciar Sesión</PrimaryButton> */}
                </div>
            </div>
        </header>
    );
}
