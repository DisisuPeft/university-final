import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex">
        {/* Lado izquierdo con mapa difuminado */}
        <div className="hidden lg:block lg:w-1/2 relative">
            <img
            src="http://127.0.0.1:8000/storage/img/view-frame-with-study-items.jpg"
            alt="Mapa de fondo"
            className="absolute w-full h-full object-cover blur-sm"
            />
          <div className="absolute inset-0 bg-gray-500 bg-opacity-30"></div>
        </div>
  
        {/* Lado derecho con el login */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inicia sesión en tu cuenta</h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
        </div>
      </div>
    );
}
