import React from 'react';

export interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const sections: Section[] = [
  {
    id: 'team-members',
    title: 'Equipo de Desarrollo',
    content: (
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-6 mb-8 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center border-b border-blue-400 pb-2">
          Integrantes del Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-gray-700/50 rounded-lg">
            <p className="font-semibold">Marcelo Eduardo Suarez Mariscal</p>
            <p className="text-blue-200">Código: 184656</p>
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg">
            <p className="font-semibold">Condori Huaychay Cesar</p>
            <p className="text-blue-200">Código: 154628</p>
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg">
            <p className="font-semibold">Quispe Pichuilla Ayrton</p>
            <p className="text-blue-200">Código: 120895</p>
          </div>
          <div className="p-3 bg-gray-700/50 rounded-lg">
            <p className="font-semibold">Zegarra Rojas Jorge Enrique</p>
            <p className="text-blue-200">Código: 161534</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'executive-summary',
    title: 'Resumen Ejecutivo',
    content: (
      <>
        <p className="mb-4">
          CoolBox, empresa peruana con más de 150 tiendas físicas y un ecommerce que cubre todo el Perú, se dedica a la venta de tecnología y electrónica de consumo. Fundada en 1997 como Radioshack y transformada en CoolBox en 2015, la empresa se enfoca en la accesibilidad, innovación y atención al cliente.
        </p>
        <p className="mb-4">
          La visión de CoolBox es ser líder en el retail omnicanal especializado en tecnología en Perú, y su misión es enriquecer la vida de las personas con soluciones tecnológicas accesibles y de alta calidad. Sus objetivos estratégicos incluyen la expansión omnicanal, innovación constante, mejora de la experiencia del cliente y responsabilidad social.
        </p>
        <p className="mb-4">
          Las estrategias clave abarcan la apertura de nuevas tiendas, fortalecimiento del ecommerce, introducción de marcas exclusivas y mejora en atención al cliente y postventa. Se espera un crecimiento en el mercado tecnológico, consolidación como líder nacional, aumento de la satisfacción y fidelización del cliente, y un impacto positivo en la comunidad.
        </p>
        <img
          src="/src/assets/0_tienda.png"
          alt="Marca CoolBox"
          className="w-full rounded-lg shadow-lg mb-4"
        />
      </>
    ),
  },
  {
    id: 'company-overview',
    title: 'Características Generales de la Institución',
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">Ubicación Geográfica</h3>
        <p className="mb-4">
          País: Perú, Departamento: Cusco, Provincia: Cusco, Distrito: Cusco, Dirección: Calle Ayacucho y, Av. El Sol 178, Av. de la Cultura S/N Int 135, C.C Real Plaza Cusco, LC-135 y LC-137.
        </p>
        <h3 className="text-xl font-semibold mb-3">Acerca de la Institución</h3>
        <p className="mb-4">
          Coolbox, fundada en 1997 como Radioshack, se consolidó en 2015 como Coolbox. Se especializa en la venta de productos tecnológicos y ofrece un servicio postventa destacado. Opera en el sector retail con más de 150 tiendas y un ecommerce.
        </p>
        <img
          src="/src/assets/1_marca.png"
          alt="Marca CoolBox"
          className="w-full rounded-lg shadow-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-3">Potencialidades</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Innovación constante</li>
          <li>Presencia en todo el Perú</li>
          <li>Relaciones con proveedores estratégicos</li>
          <li>Servicio al cliente sobresaliente</li>
          <li>Compromiso con la responsabilidad social</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Organización de la Empresa</h3>
        <p className="mb-4">
          CoolBox está estructurada en áreas clave: Dirección General, Ventas y Marketing, Logística y Distribución, Servicio al Cliente, Innovación y Tecnología, y Recursos Humanos.
        </p>
        <h3 className="text-xl font-semibold mb-3">Infraestructura</h3>
        <p className="mb-4">
          CoolBox cuenta con más de 150 tiendas físicas, una plataforma de ecommerce, almacenes y centros de distribución, y sistemas tecnológicos avanzados.
        </p>
        <h3 className="text-xl font-semibold mb-3">Equipos y Maquinarias</h3>
        <p className="mb-4">
          La empresa utiliza sistemas de punto de venta, software de gestión ERP, plataforma CRM, y equipos de soporte técnico avanzados.
        </p>
        <h3 className="text-xl font-semibold mb-3">Descripción del Personal</h3>
        <p className="mb-4">
          CoolBox cuenta con directivos, personal de ventas, soporte técnico, equipos de logística y operaciones, y marketing y desarrollo.
        </p>
      </>
    ),
  },
  {
    id: 'strategic-plan',
    title: 'Plan Estratégico - Etapa Filosófica',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4">4. Plan Estratégico - Etapa Filosófica</h3>
        <h4 className="text-xl font-semibold mb-3">4.1. Visión</h4>
        <p className="italic mb-4">“Ser la cadena de tiendas líder en tecnología y electrónica en Perú, reconocida por la innovación, calidad de productos y excelencia en el servicio al cliente.”</p>
        <h4 className="text-xl font-semibold mb-3">4.2. Misión</h4>
        <p className="italic mb-4">“Ofrecer a nuestros clientes una experiencia de compra superior mediante una amplia gama de productos de tecnología y electrónica, combinada con un servicio al cliente excepcional y soluciones innovadoras.”</p>
        <h4 className="text-xl font-semibold mb-3">4.3. Valores</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Calidad: Compromiso con la excelencia en productos y servicios.</li>
          <li>Innovación: Promover la incorporación de nuevas tecnologías y tendencias.</li>
          <li>Integridad: Actuar con ética y transparencia en todas nuestras operaciones.</li>
          <li>Orientación al cliente: Poner siempre al cliente en el centro de nuestras decisiones.</li>
          <li>Trabajo en Equipo: Fomentar la colaboración y el respeto mutuo entre los empleados.</li>
        </ul>
        <h4 className="text-xl font-semibold mb-3">4.4. Políticas</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Atención al Cliente: Políticas de devolución y garantía que aseguren la satisfacción del cliente.</li>
          <li>Sostenibilidad: Implementar prácticas que minimicen el impacto ambiental de nuestras operaciones.</li>
          <li>Capacitación Continua: Invertir en la formación y desarrollo profesional de nuestros empleados.</li>
          <li>Innovación Constante: Mantener una actualización constante de nuestro catálogo de productos y servicios.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'strategic-analysis',
    title: 'Plan Estratégico - Auditoría Externa e Interna',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4">5. Plan Estratégico - Auditoría Externa e Interna</h3>

        <h4 className="text-xl font-semibold mb-3">5.1. Análisis Externo</h4>

        <div className="mb-6">
          <h5 className="text-lg font-semibold text-blue-700 mb-3">5.1.1. Oportunidades</h5>
          <ul className="space-y-2 list-disc list-inside">
            <li className="text-gray-800">
              <span className="font-medium">Colaboración con marcas tecnológicas:</span> Aprovechar alianzas estratégicas para obtener mejores productos y descuentos.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Aumento en la demanda:</span> La creciente digitalización impulsa la demanda de productos electrónicos.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Auge del comercio electrónico:</span> Oportunidad de expansión de la plataforma online.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Programas de fidelización:</span> Implementar programas para retener clientes recurrentes.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Expansión geográfica:</span> Potencial para abrir tiendas en nuevas ciudades y regiones.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h5 className="text-lg font-semibold text-red-700 mb-3">5.1.2. Amenazas</h5>
          <ul className="space-y-2 list-disc list-inside">
            <li className="text-gray-800">
              <span className="font-medium">Cambios tecnológicos rápidos:</span> Necesidad de mantener actualizado el catálogo de productos.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Mercado competitivo:</span> Competencia nacional e internacional creciente.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Variación en costos:</span> Cambios en políticas de importación pueden afectar precios.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Dependencia de proveedores:</span> Vulnerabilidad ante problemas con proveedores externos.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Riesgos de ciberseguridad:</span> Amenazas potenciales a la seguridad de datos.
            </li>
          </ul>
        </div>

        <h4 className="text-xl font-semibold mb-3">5.2. Análisis Interno</h4>

        <div className="mb-6">
          <h5 className="text-lg font-semibold text-green-700 mb-3">5.2.1. Fortalezas</h5>
          <ul className="space-y-2 list-disc list-inside">
            <li className="text-gray-800">
              <span className="font-medium">Reconocimiento de marca:</span> Marca establecida en el mercado tecnológico.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Amplia gama de productos:</span> Variedad de productos electrónicos y accesorios.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Canales de distribución:</span> Presencia física y online eficiente.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Servicio al cliente:</span> Excelente servicio post-venta y garantías.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Estrategia de marketing:</span> Campañas efectivas para público tecnológico.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h5 className="text-lg font-semibold text-yellow-700 mb-3">5.2.2. Debilidades</h5>
          <ul className="space-y-2 list-disc list-inside">
            <li className="text-gray-800">
              <span className="font-medium">Falta de diferenciación:</span> Limitada exclusividad en productos.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Dependencia técnica:</span> Servicios técnicos externos limitan resolución de problemas.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Rotación de personal:</span> Afecta consistencia del servicio.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Baja inversión en innovación:</span> Limitada capacidad de adaptación a nuevas tendencias.
            </li>
            <li className="text-gray-800">
              <span className="font-medium">Eficiencia operativa:</span> Procesos internos por optimizar.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'competency-matrix',
    title: 'Matriz de Competencias',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4">6. Matriz de Competencias</h3>

        <h4 className="text-xl font-semibold mb-3">6.1. Matriz de Evaluación del Factor Externo (EFE)</h4>
        <p className="mb-4">
          La Matriz de Evaluación de Factores Externos (EFE) evalúa las oportunidades y amenazas que enfrenta CoolBox en su entorno externo.
        </p>
        <img src="/src/assets/2_efe.png" alt="Matriz de Evaluación del Factor Externo" className="w-full rounded-lg shadow-lg mb-4" />
        <p className="mb-4">
          <strong>Oportunidades:</strong> La demanda creciente de productos tecnológicos y el auge del comercio electrónico son las mayores oportunidades. Colaboraciones con empresas tecnológicas y el crecimiento del turismo en Cusco también son relevantes.
        </p>
        <p className="mb-4">
          <strong>Amenazas:</strong> El contrabando y la venta de productos de segundo uso, la rápida obsolescencia tecnológica, y la alta competencia son las principales amenazas.
        </p>
        <p className="mb-4">
          <strong>Puntaje total:</strong> 2.64, indicando una posición favorable frente al entorno externo.
        </p>

        <h4 className="text-xl font-semibold mb-3">6.2. Matriz de Evaluación del Factor Interno (EFI)</h4>
        <p className="mb-4">
          La Matriz de Evaluación de Factores Internos (EFI) evalúa las fortalezas y debilidades internas de CoolBox.
        </p>
        <img src="/src/assets/3_efi.png" alt="Matriz de Evaluación del Factor Interno" className="w-full rounded-lg shadow-lg mb-4" />
        <p className="mb-4">
          <strong>Fortalezas:</strong> Reconocimiento de marca, localización estratégica de tiendas, estrategia de marketing efectiva, servicio personalizado, y actualización constante de stock.
        </p>
        <p className="mb-4">
          <strong>Debilidades:</strong> Dependencia de proveedores externos, rotación de personal, limitada diferenciación de productos, infraestructura limitada, y falta de presencia en comunidades rurales.
        </p>
        <p className="mb-4">
          <strong>Puntaje total:</strong> 2.59, indicando un buen equilibrio entre fortalezas y debilidades internas.
        </p>

        <h4 className="text-xl font-semibold mb-3">6.3. Matriz del Perfil Competitivo</h4>
        <p className="mb-4">
          La Matriz de Perfil Competitivo compara a CoolBox con sus competidores.
        </p>
        <img src="/src/assets/4_mpc.png" alt="Matriz del Perfil Competitivo" className="w-full rounded-lg shadow-lg mb-4" />
        <p className="mb-4">
          <strong>Interpretación:</strong> CoolBox y Oeschle tienen el mismo puntaje final (3.25), compitiendo de manera equilibrada en factores clave. CoolBox se destaca en participación de mercado y calidad de servicio, mientras que Oeschle tiene una ligera ventaja en innovación. Saga Falabella, con un puntaje más bajo (2.45), muestra debilidades en publicidad y participación en el mercado.
        </p>
      </>
    ),
  },
  {
    id: 'competency-matrix',
    title: 'MATRIZ FODA Y ESTRATEGIAS FO-FA-DO-DA',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4">7. Matriz Foda y Estrategias FO-FA-DO-DA</h3>
        <img src="/src/assets/5_foda.png" alt="Matriz del Perfil Competitivo" className="w-full rounded-lg shadow-lg mb-4" />
      </>
    ),
  },
  {
    id: 'pe-ea-bcg-ie-main-strategy',
    title: 'MATRIZ PEyEA, BCG, IE, ESTRATEGIA PRINCIPAL',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4">7. Matriz de la Posición Estratégica y Evaluación de la Acción (PEyEA)</h3>
        <img src="/src/assets/6_pe_ea.png" alt="Matriz del Perfil Competitivo" className="w-full rounded-lg shadow-lg mb-4" />
        <img src="/src/assets/7_peea.png" alt="Matriz del Perfil Competitivo" className="w-full rounded-lg shadow-lg mb-4" />
      </>
    ),
  },
];