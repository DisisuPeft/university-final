import { User } from 'lucide-react';

export default function Testimonios(){
    const testimonios = [
        {
          nombre: "María González",
          cargo: "Gerente de Marketing Digital",
          comentario: "El curso superó todas mis expectativas. Los conocimientos adquiridos han sido fundamentales para mi desarrollo profesional."
        },
        {
          nombre: "Carlos Rodríguez",
          cargo: "Data Scientist Senior",
          comentario: "La calidad del contenido y la atención personalizada hacen que este programa sea excepcional."
        },
        {
          nombre: "Ana Martínez",
          cargo: "Project Manager",
          comentario: "Una experiencia de aprendizaje transformadora. Los profesores son verdaderos expertos en su campo."
        }
      ];
    return (
        <section id="testimonios" className="py-[100px] mb-[150px]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Estudiantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonios.map((testimonio, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6">
                            {   /* Header con Avatar y Datos */}
                            <div className="flex items-center space-x-4 mb-4">
                                {/* Avatar Circle con User Icon */}
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-gray-600" />
                                </div>
                            
                                {/* Información del Usuario */}
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {testimonio.nombre}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {testimonio.cargo}
                                    </p>
                                </div>
                            </div>
                        
                            {/* Contenido del Testimonio */}
                            <div>
                                <p className="text-gray-700 italic">
                                    "{testimonio.comentario}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}