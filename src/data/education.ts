export interface EducationModule {
  name: string;
  url: string;
}

export interface EducationItem {
  year: string;
  institution: string;
  title: string;
  status: 'Completado' | 'En curso' | 'En trámite';
  chips: string[];
  certLink?: { label: string; url: string };
  modalTitle: string;
  modalDesc: string;
  modules: EducationModule[];
}

export const education: EducationItem[] = [
  {
    year: '2022',
    institution: 'Coderhouse',
    title: 'Carrera de Desarrollo Frontend React',
    status: 'Completado',
    chips: ['Desarrollo Web', 'JavaScript', 'React', 'SASS'],
    certLink: { label: 'Ver certificado final', url: '/img/Educacion/frontend.png' },
    modalTitle: 'Coderhouse - Frontend React',
    modalDesc:
      'Carrera compuesta por módulos de Desarrollo Web, JavaScript y React, con prácticas y proyecto final.',
    modules: [
      { name: 'Desarrollo Web', url: '/img/Educacion/Desarrollo-web.png' },
      { name: 'JavaScript', url: '/img/Educacion/js-coderrhouse.png' },
      { name: 'React', url: '/img/Educacion/React.png' },
      { name: 'Certificado Final', url: '/img/Educacion/frontend.png' },
    ],
  },
  {
    year: 'Abril 2025',
    institution: 'NODO + Universidad Nacional de Catamarca',
    title: 'Diplomatura Universitaria en Desarrollo Web Full Stack con Javascript',
    status: 'Completado',
    chips: ['HTML/CSS', 'Tailwind', 'JavaScript', 'React', 'Node', 'MongoDB', 'Express', 'SCRUM'],
    certLink: { label: 'Ver diploma', url: '/img/Educacion/Diploma-Universitario.pdf' },
    modalTitle: 'Diplomado Universitario Full Stack',
    modalDesc:
      'Diplomado universitario en desarrollo web full stack con NODO y UNCA: desde HTML/CSS/Tailwind hasta backend con Node, Express y MongoDB.',
    modules: [
      { name: 'Diploma', url: '/img/Educacion/Diploma-Universitario.pdf' },
      { name: 'Módulo 1-2-3-4', url: '/img/Educacion/modulo-1,2,3,4.pdf' },
    ],
  },
  {
    year: 'Diciembre 2025',
    institution: 'Instituto San Martín',
    title: 'Titulo Nacional de Técnico Superior en Desarrollo de Software',
    status: 'Completado',
    chips: ['Algoritmos', 'Diseño de Software', 'Gestión de Proyectos', 'Base de datos', 'PHP', 'MySQL', 'SCRUM', 'I.A'],
    modalTitle: 'Instituto San Martín',
    modalDesc:
      'Formación en desarrollo y fundamentos: algoritmos, bases de datos relacionales, metodologías ágiles (SCRUM), PHP, MySQL y nociones de I.A. Título en trámite.',
    modules: [
      { name: 'Ver CV', url: '/CV.pdf' },
    ],
  },
  {
    year: '2025',
    institution: 'NODO + Universidad Nacional de Catamarca',
    title: 'Post-Diplomatura en Desarrollo Web Avanzado',
    status: 'Completado',
    chips: ['Next.js', 'Prisma ORM', 'Supabase', 'TypeScript', 'PostgreSQL'],
    modalTitle: 'Post-Diplomatura Universitaria',
    modalDesc:
      'Post-diplomatura universitaria orientada al desarrollo web avanzado con tecnologías modernas. Profundización en Next.js (App Router), Prisma ORM para modelado de datos con TypeScript, y Supabase como plataforma BaaS.',
    modules: [],
  },
];
