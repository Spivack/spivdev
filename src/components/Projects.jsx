import { useInView } from '../hooks/useInView'
import { ExternalLink } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

const projects = [
  {
    name: 'arnoldsoundboard.com',
    url: 'https://arnoldsoundboard.com',
    thumbnail: '/images/arnoldsoundboard-img.png',
  },
  {
    name: 'spivack.org',
    url: 'https://spivack.org',
    thumbnail: '/images/spivackorg-img.png',
  },
  {
    name: 'spivhack.com',
    url: 'https://spivhack.com',
    thumbnail: '/images/spivhack-img.png',
  },
  {
    name: 'Coming Soon',
    url: null,
    thumbnail: null,
  },
]

function GithubBanner() {
  return (
    <a
      href="https://github.com/spivack"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-t-2 border-t-accent border-x border-b border-edge bg-surface-secondary px-8 py-6 mb-10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
    >
      <div className="flex items-center gap-5">
        <GithubIcon size={28} className="text-ink-secondary group-hover:text-accent transition-colors duration-200" />
        <div>
          <p className="font-display text-xl font-semibold text-ink-primary group-hover:text-accent transition-colors duration-200">
            github.com/spivack
          </p>
          <p className="font-mono text-xs text-ink-muted tracking-widest mt-1">
            View all repositories
          </p>
        </div>
      </div>
      <ExternalLink size={16} className="text-ink-muted group-hover:text-accent transition-colors duration-200" />
    </a>
  )
}

function ProjectCard({ name, url, thumbnail }) {
  if (!url) {
    return (
      <div className="bg-surface-secondary border border-edge border-dashed rounded-lg overflow-hidden opacity-40">
        <div className="aspect-video bg-surface-tertiary" />
        <div className="p-5 flex items-center justify-between">
          <span className="font-display font-semibold text-ink-secondary">{name}</span>
        </div>
      </div>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-surface-secondary border border-edge rounded-lg overflow-hidden hover:border-accent transition-colors duration-200"
    >
      <div className="aspect-video overflow-hidden bg-surface-tertiary">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex items-center justify-between">
        <span className="font-display font-semibold text-ink-primary group-hover:text-accent transition-colors duration-200">
          {name}
        </span>
        <ExternalLink size={14} className="text-ink-muted group-hover:text-accent transition-colors duration-200" />
      </div>
    </a>
  )
}


export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-28 px-6 bg-surface-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-2 text-ink-primary">Projects</h2>
        <div className="w-10 h-0.5 bg-accent mb-14" />
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <GithubBanner />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
