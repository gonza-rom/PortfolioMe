export interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  filterTags: string[];
  status: 'Completado' | 'En desarrollo';
  github?: string;
  githubFE?: string;
  githubBE?: string;
  demo?: string;
}

export const projects: Project[] = [
  // ─── Proyectos más recientes (Next.js / Astro) ──────────────
  {
    title: 'Portfolio Personal',
    shortDesc: 'Mi portfolio desarrollado con Astro y Tailwind CSS. 100/100 PageSpeed.',
    fullDesc:
      'Portfolio personal desarrollado con Astro para máxima performance — zero JS por defecto, SVGs inline, build estático optimizado. Diseño dark/light mode, filtrado de proyectos, modales y animaciones con Vanilla JS. TypeScript + Tailwind CSS.',
    image: '/img/proyectos/portfolio.png',
    tags: ['Astro', 'Tailwind', 'TypeScript', 'SEO'],
    filterTags: ['astro', 'tailwind', 'typescript', 'js'],
    status: 'Completado',
    demo: '/',
  },
  {
    title: 'JMR E-commerce',
    shortDesc: 'Tienda online completa con carrito, checkout y panel de admin.',
    fullDesc:
      'Tienda online completa para JMR Marroquinería con catálogo de +100 productos, carrito de compras, checkout con pasarela de pagos y panel de administración. Desarrollada con Next.js y base de datos SQL.',
    image: '/img/proyectos/jmr-ecommerce.png',
    tags: ['Next.js', 'React', 'Tailwind', 'SQL'],
    filterTags: ['next', 'react', 'tailwind'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/jmr-ecommerce',
    demo: 'https://www.jmrmarroquineria.com.ar/',
  },
  {
    title: 'JMR Pos',
    shortDesc: 'Sistema de gestión de inventario en tiempo real con alertas y reportes.',
    fullDesc:
      'Sistema de gestión de inventario en tiempo real para JMR Marroquinería. Control de stock, alertas automáticas de bajo inventario, reportes y métricas para optimizar el negocio. Soporte multi-usuario. Desarrollado con Next.js y Supabase.',
    image: '/img/proyectos/jmr-pos.png',
    tags: ['Next.js', 'Supabase', 'React', 'TypeScript'],
    filterTags: ['next', 'react', 'typescript', 'supabase'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/jmr-stock',
  },
  {
    title: 'Vista Montaña Hospedaje',
    shortDesc: 'Sitio de alquileres vacacionales con galería y reservas por WhatsApp.',
    fullDesc:
      'Sitio de alquileres vacacionales con galería de imágenes, información detallada de cabañas y sistema de consultas vía WhatsApp para facilitar reservas. SEO turístico optimizado y responsive perfecto. Desarrollado con Next.js.',
    image: '/img/proyectos/vista-montana.png',
    tags: ['Next.js', 'React', 'Tailwind', 'WhatsApp API'],
    filterTags: ['next', 'react', 'tailwind'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/VistaMontana',
    demo: 'https://vista-montana.vercel.app/',
  },
  {
    title: 'DevHub Institucional',
    shortDesc: 'Web corporativa con portfolio, equipo y contacto. 100/100 PageSpeed.',
    fullDesc:
      'Web corporativa con portfolio de proyectos, equipo y formulario de contacto. Optimizado para conversión y velocidad máxima: 100/100 PageSpeed, SEO completo, Schema.org y Open Graph. Desarrollado con Astro y Tailwind CSS.',
    image: '/img/proyectos/devhub.png',
    tags: ['Astro', 'Tailwind', 'JavaScript', 'SEO'],
    filterTags: ['astro', 'tailwind', 'js'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/devhub',
    demo: 'https://devhub-cta.vercel.app/',
  },
  // ─── Proyectos anteriores ────────────────────────────────────
  {
    title: 'Gonflix',
    shortDesc: 'Plataforma de streaming completa (Full Stack).',
    fullDesc:
      'Gonflix es una plataforma de streaming desarrollada con el ecosistema JavaScript. Cuenta con registro seguro (verificación por email con Nodemailer y JWT), gestión de perfiles personalizados, lista de favoritos y un catálogo de películas.',
    image: '/img/proyectos/Gonflix.png',
    tags: ['React', 'Node', 'MongoDB', 'Tailwind'],
    filterTags: ['react', 'node', 'mongodb', 'tailwind', 'js'],
    status: 'Completado',
    githubFE: 'https://github.com/gonza-rom/Gonflix-Front',
    githubBE: 'https://github.com/gonza-rom/Gonflix-Backend',
    demo: 'https://gonflix.netlify.app/',
  },
  {
    title: 'Catamap',
    shortDesc: 'Plataforma web de turismo sostenible y colaborativo para Catamarca.',
    fullDesc:
      'Plataforma de Turismo Sostenible y Colaborativo para Catamarca. Aplicación web diseñada para visibilizar y promover atractivos turísticos poco convencionales de la provincia. Fomenta el desarrollo local y la participación comunitaria a través de un mapa interactivo.',
    image: '/img/proyectos/catamap.png',
    tags: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    filterTags: ['js', 'php', 'mysql'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/Catamap',
  },
  {
    title: 'Rick and Morty Page',
    shortDesc: 'Buscador de personajes utilizando la API de Rick & Morty.',
    fullDesc:
      '¡Explorá el multiverso! Aplicación que interactúa con la API pública de Rick and Morty. Permite buscar personajes con filtros avanzados y paginación.',
    image: '/img/proyectos/Rick.png',
    tags: ['React', 'Tailwind', 'JavaScript'],
    filterTags: ['react', 'tailwind', 'js'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/Modulo-4-React-Sprint-4',
    demo: 'https://rickandmortygon.netlify.app',
  },
  {
    title: 'CTA GAMING React',
    shortDesc: 'E-commerce de productos gaming desarrollado en React.js.',
    fullDesc:
      'Proyecto final de React para Coderhouse. E-commerce funcional con carrito de compras y catálogo de productos gaming. Integrado con Firebase para base de datos en tiempo real.',
    image: '/img/proyectos/banner.png',
    tags: ['React', 'Firebase', 'Bootstrap', 'JavaScript'],
    filterTags: ['react', 'firebase', 'js', 'sass'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/ReactEcommerceProyectoFinal',
  },
  {
    title: 'CTA GAMING Js',
    shortDesc: 'E-commerce JS Vanilla con carrito de compras.',
    fullDesc:
      'Proyecto final para el curso de JavaScript de Coderhouse. E-commerce con lógica de carrito y stock hecha en Vanilla JS.',
    image: '/img/proyectos/banner3.png',
    tags: ['JavaScript', 'Bootstrap'],
    filterTags: ['js'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/ProyectoCoderJavascript',
    demo: 'https://ctagaming.netlify.app',
  },
  {
    title: 'JMR Marroquineria (v1)',
    shortDesc: 'Primera web para JMR Marroquinería — maquetado con Bootstrap y SASS.',
    fullDesc:
      'Mi primer proyecto web creado para JMR Marroquinería. Maquetado responsivo utilizando HTML, CSS, SASS y Bootstrap.',
    image: '/img/proyectos/banner2.png',
    tags: ['Bootstrap', 'SASS'],
    filterTags: ['sass'],
    status: 'Completado',
    github: 'https://github.com/gonza-rom/Proyecto-Final-Desarrolo-Web-Coder',
    demo: 'https://jmrmarroquineria.netlify.app',
  },
];
