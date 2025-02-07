import { Link } from "@inertiajs/react"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer(){
    const date = new Date()
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">Educational platform</h3>
                    <p className="text-sm">Impulsando carreras, transformando vidas</p>
                </div>
                <div className="flex item-center flex-row">
                    <nav className="mb-4 md:mb-0 pr-[50px]">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#" className="hover:text-primary">
                                Cursos
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-primary">
                            <Facebook />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Twitter />
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <Instagram />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">© {date.getFullYear()} Educational platform. Todos los derechos reservados.</div>
      </footer>
    )
}