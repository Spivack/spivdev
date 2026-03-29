import { Linkedin, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const emailUser = 'evan'
const emailName = 'spivack'
const emailTld = 'io'

const links = [
  {
    label: 'LinkedIn',
    value: 'evan-spivack',
    href: 'https://www.linkedin.com/in/evan-spivack',
    Icon: Linkedin,
  },
  {
    label: 'Email',
    getValue: () => `${emailUser}@${emailName}.${emailTld}`,
    getHref: () => `mailto:${emailUser}@${emailName}.${emailTld}`,
    Icon: Mail,
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-bold mb-2 text-ink-primary">Get in Touch</h2>
        <div className="w-10 h-0.5 bg-accent mb-14" />
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {links.map(({ label, value, getValue, href, getHref, Icon }) => (
            <a
              key={label}
              href={getHref ? getHref() : href}
              target={getHref ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group bg-surface-secondary border border-edge rounded-lg p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-200"
            >
              <Icon
                size={20}
                className="text-ink-muted group-hover:text-accent transition-colors duration-200"
              />
              <div>
                <p className="font-mono text-accent text-xs tracking-widest uppercase mb-1">
                  {label}
                </p>
                <p className="text-ink-secondary text-sm group-hover:text-ink-primary transition-colors duration-200">
                  {getValue ? getValue() : value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
