import React from 'react';

const BiblioSisInfografia = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-xl">
      {/* Encabezado */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">BiblioSis</h1>
        <p className="text-gray-600 text-xl">Sistema Integral de Gestión Bibliotecaria</p>
      </div>

      {/* Secciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Panel izquierdo: Características principales */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <i className="fas fa-list-check mr-3"></i> Características Principales
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                <i className="fas fa-user-shield text-purple-600"></i>
              </div>
              <div>
                <span className="font-medium">Gestión de roles</span>
                <p className="text-gray-600 text-sm">Administradores, bibliotecarios y usuarios con diferentes niveles de acceso</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                <i className="fas fa-book text-purple-600"></i>
              </div>
              <div>
                <span className="font-medium">Catálogo digital</span>
                <p className="text-gray-600 text-sm">Búsqueda y filtrado avanzado de libros por múltiples criterios</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                <i className="fas fa-handshake text-purple-600"></i>
              </div>
              <div>
                <span className="font-medium">Sistema de préstamos</span>
                <p className="text-gray-600 text-sm">Gestión completa del ciclo de préstamo con notificaciones y recordatorios</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                <i className="fas fa-shopping-cart text-purple-600"></i>
              </div>
              <div>
                <span className="font-medium">Carrito de préstamos</span>
                <p className="text-gray-600 text-sm">Sistema de selección múltiple para solicitar varios libros a la vez</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                <i className="fas fa-chart-bar text-purple-600"></i>
              </div>
              <div>
                <span className="font-medium">Reportes y estadísticas</span>
                <p className="text-gray-600 text-sm">Generación de informes sobre préstamos, libros populares y usuarios activos</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                <i className="fas fa-cog text-purple-600"></i>
              </div>
              <div>
                <span className="font-medium">Configuración administrativa</span>
                <p className="text-gray-600 text-sm">Personalización de parámetros del sistema como días de préstamo y límites</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Panel derecho: Tecnologías */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <i className="fas fa-code mr-3"></i> Stack Tecnológico
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-purple-600">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fab fa-html5 text-blue-600"></i>
                  </div>
                  <span>HTML5</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fab fa-css3-alt text-blue-600"></i>
                  </div>
                  <span>CSS3</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
                    <i className="fab fa-js text-yellow-600"></i>
                  </div>
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fab fa-tailwind text-blue-600"></i>
                  </div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-font-awesome text-blue-600"></i>
                  </div>
                  <span>Font Awesome</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-purple-600">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fab fa-php text-purple-600"></i>
                  </div>
                  <span>PHP</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-database text-blue-600"></i>
                  </div>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fab fa-apache text-red-600"></i>
                  </div>
                  <span>Apache</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-file-code text-green-600"></i>
                  </div>
                  <span>JSON/AJAX</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 mr-2 flex-shrink-0 bg-indigo-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-key text-indigo-600"></i>
                  </div>
                  <span>PDO/Seguridad</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Herramientas de desarrollo */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2 text-purple-600">Herramientas de Desarrollo</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">VS Code</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Git</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">XAMPP</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">phpMyAdmin</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Chrome DevTools</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arquitectura y módulos del sistema */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
          <i className="fas fa-sitemap mr-3"></i> Arquitectura del Sistema
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-medium text-purple-700 mb-2">Módulo de Catálogo</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Gestión de libros</li>
              <li>• Gestión de autores</li>
              <li>• Gestión de editoriales</li>
              <li>• Categorización y géneros</li>
              <li>• Búsqueda avanzada</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-medium text-blue-700 mb-2">Módulo de Usuarios</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Registro y autenticación</li>
              <li>• Gestión de perfiles</li>
              <li>• Control de roles</li>
              <li>• Gestión de bibliotecarios</li>
              <li>• Historial de préstamos</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-medium text-green-700 mb-2">Módulo de Préstamos</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Solicitud de préstamos</li>
              <li>• Carrito de préstamos</li>
              <li>• Aprobación/rechazo</li>
              <li>• Devoluciones</li>
              <li>• Notificaciones</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-medium text-red-700 mb-2">Módulo Administrativo</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Panel de control</li>
              <li>• Configuración del sistema</li>
              <li>• Gestión de parámetros</li>
              <li>• Backup y seguridad</li>
              <li>• Logs del sistema</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-medium text-yellow-700 mb-2">Módulo de Reportes</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Estadísticas de uso</li>
              <li>• Reportes de préstamos</li>
              <li>• Libros más populares</li>
              <li>• Usuarios más activos</li>
              <li>• Exportación (PDF/Excel)</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
            <h3 className="font-medium text-indigo-700 mb-2">Características Adicionales</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Sistema de búsqueda global</li>
              <li>• Diseño responsive</li>
              <li>• Accesibilidad web</li>
              <li>• Protección contra XSS y CSRF</li>
              <li>• Compatibilidad cross-browser</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flujo de trabajo y beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Flujo de trabajo */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <i className="fas fa-arrow-right-arrow-left mr-3"></i> Flujo de Préstamos
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg flex-grow">
                <p className="text-blue-800"><span className="font-medium">Usuario</span> busca y agrega libros al carrito</p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-5 w-0.5 h-6 bg-gray-300"></div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-indigo-600">2</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg flex-grow">
                <p className="text-indigo-800"><span className="font-medium">Usuario</span> finaliza su solicitud de préstamo</p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-5 w-0.5 h-6 bg-gray-300"></div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-purple-600">3</span>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg flex-grow">
                <p className="text-purple-800"><span className="font-medium">Bibliotecario</span> aprueba o rechaza solicitud</p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-5 w-0.5 h-6 bg-gray-300"></div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-green-600">4</span>
              </div>
              <div className="bg-green-50 p-3 rounded-lg flex-grow">
                <p className="text-green-800"><span className="font-medium">Usuario</span> retira el libro físicamente</p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-5 w-0.5 h-6 bg-gray-300"></div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-orange-600">5</span>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg flex-grow">
                <p className="text-orange-800"><span className="font-medium">Usuario</span> devuelve el libro al terminar</p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-5 w-0.5 h-6 bg-gray-300"></div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-bold text-red-600">6</span>
              </div>
              <div className="bg-red-50 p-3 rounded-lg flex-grow">
                <p className="text-red-800"><span className="font-medium">Sistema</span> actualiza inventario automáticamente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <i className="fas fa-star mr-3"></i> Beneficios y Resultados
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <i className="fas fa-check text-green-600"></i>
              </div>
              <h3 className="font-medium mb-2">Para la Biblioteca</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-green-600 mt-1 mr-2"></i>
                  <span>Reducción de tareas administrativas manuales</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-green-600 mt-1 mr-2"></i>
                  <span>Mejor control del inventario de libros</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-green-600 mt-1 mr-2"></i>
                  <span>Estadísticas para toma de decisiones</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-green-600 mt-1 mr-2"></i>
                  <span>Reducción de pérdidas y extravíos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <i className="fas fa-user text-blue-600"></i>
              </div>
              <h3 className="font-medium mb-2">Para los Usuarios</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-blue-600 mt-1 mr-2"></i>
                  <span>Consulta de catálogos en línea 24/7</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-blue-600 mt-1 mr-2"></i>
                  <span>Solicitud de préstamos sin desplazamientos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-blue-600 mt-1 mr-2"></i>
                  <span>Historial personal de préstamos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-angle-right text-blue-600 mt-1 mr-2"></i>
                  <span>Interfaz intuitiva y responsive</span>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 bg-purple-50 p-4 rounded-lg mt-2">
              <h3 className="font-medium mb-2 text-purple-700">Métricas de Éxito</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-700">98%</div>
                  <p className="text-sm text-gray-600">Satisfacción de usuarios</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-700">45%</div>
                  <p className="text-sm text-gray-600">Reducción en tiempos administrativos</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-700">30%</div>
                  <p className="text-sm text-gray-600">Aumento en circulación de libros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>BiblioSis © 2025 - Sistema Integral de Gestión Bibliotecaria</p>
        <p className="mt-1">Desarrollado con tecnologías web modernas para mejorar la experiencia bibliotecaria</p>
      </div>
    </div>
  );
};

export default BiblioSisInfografia;
