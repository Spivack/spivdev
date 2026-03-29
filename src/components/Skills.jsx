import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    number: '01',
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    number: '02',
    category: 'Frameworks',
    skills: ['Spring Boot', 'Django', 'React', 'Bootstrap'],
  },
  {
    number: '03',
    category: 'Infrastructure',
    skills: ['AWS', 'Docker', 'PostgreSQL', 'Linux'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-2 text-ink-primary">Stack</h2>
        <div className="w-10 h-0.5 bg-accent mb-14" />
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {skillGroups.map(({ number, category, skills }) => (
            <div
              key={category}
              className="bg-surface-secondary border-t-2 border-t-accent border-x border-b border-edge p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
            >
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-mono text-accent text-xs">{number}</span>
                <span className="font-mono text-ink-muted text-xs">/</span>
                <span className="font-mono text-xs tracking-widest uppercase text-ink-secondary">
                  {category}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-display text-lg font-semibold text-ink-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
