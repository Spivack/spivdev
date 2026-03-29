import { Linkedin, Mail } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const emailUser = 'evan'
const emailName = 'spivack'
const emailTld = 'io'

const socialLinks = [
  { Icon: GithubIcon, href: 'https://github.com/spivack', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/evan-spivack', label: 'LinkedIn' },
  { Icon: Mail, getHref: () => `mailto:${emailUser}@${emailName}.${emailTld}`, label: 'Email' },
]

export default function Nav() {
  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-52 flex-col border-r border-edge bg-surface-primary/95 backdrop-blur-md z-50 px-7 py-10">
        <a
          href="#"
          className="font-mono text-accent font-semibold tracking-widest text-sm mb-14 hover:text-accent/80 transition-colors"
        >
          ES
        </a>

        <nav>
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block py-2 text-sm text-ink-secondary hover:text-ink-primary tracking-wide transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </aside>

      <div className="fixed top-0 right-0 z-50 flex items-center gap-5 px-4 h-14 bg-surface-primary/80 backdrop-blur-md lg:h-auto lg:py-10 lg:bg-transparent lg:backdrop-blur-none">
        {socialLinks.map(({ Icon, href, getHref, label }) => (
          <a
            key={label}
            href={getHref ? getHref() : href}
            target={getHref ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ink-muted hover:text-accent transition-colors duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <header className="lg:hidden fixed top-0 w-full z-50 bg-surface-primary/90 backdrop-blur-md border-b border-edge">
        <nav className="flex items-center justify-between h-14 px-6">
          <a
            href="#"
            className="font-mono text-accent font-semibold tracking-widest text-sm"
          >
            ES
          </a>
          <ul className="flex gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-ink-secondary hover:text-ink-primary text-sm transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
