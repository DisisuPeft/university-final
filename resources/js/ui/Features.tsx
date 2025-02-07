import { GraduationCap, Clock, Award } from "lucide-react"
export default function Features(){
    return (
        <section id="features" className="container mx-auto px-4 py-16 h-[300px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profesores Expertos</h3>
                <p className="text-gray-600">Aprende de profesionales con amplia experiencia en la industria</p>
            </div>
            <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Horarios Flexibles</h3>
                <p className="text-gray-600">Estudia a tu ritmo y adapta el aprendizaje a tu agenda</p>
            </div>
            <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificación Oficial</h3>
                <p className="text-gray-600">Obtén certificados reconocidos en la industria</p>
            </div>
            </div>
        </section>
    )
}