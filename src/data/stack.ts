// `si` = named export key from the `simple-icons` package (https://simpleicons.org/)
export interface Tech {
  name: string;
  si: string;
}

export interface StackCategory {
  title: string;
  techs: Tech[];
}

export const stack: StackCategory[] = [
  {
    title: 'Frontend',
    techs: [
      { name: 'HTML', si: 'siHtml5' },
      { name: 'CSS', si: 'siCss' },
      { name: 'Tailwind', si: 'siTailwindcss' },
      { name: 'JavaScript', si: 'siJavascript' },
      { name: 'TypeScript', si: 'siTypescript' },
      { name: 'React', si: 'siReact' },
      { name: 'SASS', si: 'siSass' },
      { name: 'Next.js', si: 'siNextdotjs' },
      { name: 'Astro', si: 'siAstro' },
    ],
  },
  {
    title: 'Base de Datos',
    techs: [
      { name: 'MySQL', si: 'siMysql' },
      { name: 'MongoDB', si: 'siMongodb' },
      { name: 'PostgreSQL', si: 'siPostgresql' },
      { name: 'Supabase', si: 'siSupabase' },
    ],
  },
  {
    title: 'Backend',
    techs: [
      { name: 'Node.js', si: 'siNodedotjs' },
      { name: 'PHP', si: 'siPhp' },
      { name: 'Express', si: 'siExpress' },
      { name: 'Firebase', si: 'siFirebase' },
    ],
  },
  {
    title: 'Herramientas',
    techs: [
      { name: 'Git', si: 'siGit' },
      { name: 'GitHub', si: 'siGithub' },
      { name: 'Vercel', si: 'siVercel' },
    ],
  },
];
