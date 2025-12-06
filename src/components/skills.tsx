import { Badge } from "@/components/ui/badge";

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
  'Node.js', 'NestJS', 'Express', 'tRPC',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Sass',
  'PostgreSQL', 'MongoDB', 'Prisma', 'TypeORM',
  'GraphQL', 'REST APIs', 'WebSockets',
  'Docker', 'Git', 'CI/CD', 'Jest'
];

export default function Skills() {
  return (
    <section id="habilidades">
      <h3 className="text-3xl font-bold mb-6">Habilidades</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 border-primary/40 bg-primary/20">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
