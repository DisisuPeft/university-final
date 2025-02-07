import { GraduationCap } from "lucide-react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Hero() {
    return (
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto text-center"
          >
                <GraduationCap className="mx-auto mb-8 h-16 w-16" />
                <h1 className="mb-4 text-5xl font-bold">Impulsa tu Carrera con Nuestros Diplomados y Cursos</h1>
                <p className="text-xl mb-8">Aprende de expertos y obtén certificaciones reconocidas en la industria</p>
                <PrimaryButton>
                    Explora Nuestros Programas
                </PrimaryButton>
          </div>
        </section>
    );
}
