import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-16 lg:pt-0"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 70% 60% at 10% 70%, rgba(232, 105, 74, 0.07) 0%, transparent 65%),
          repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 38px,
            rgba(48, 54, 61, 0.18) 38px,
            rgba(48, 54, 61, 0.18) 39px
          )
        `,
      }}
    >
      <div
        ref={ref}
        className={`px-10 lg:px-16 max-w-4xl transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="font-mono text-accent text-2xl font-bold tracking-widest uppercase mb-3 inline-block bg-surface-primary px-3 py-1.5">
          Full Stack Engineer
        </p>
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-widest leading-none mb-8 text-ink-primary">
          Evan<br />Spivack
        </h1>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-surface-primary font-semibold text-sm rounded-md hover:bg-accent/85 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-edge text-ink-secondary text-sm rounded-md hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 text-ink-muted">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-edge" />
        <span className="font-mono text-xs tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          scroll
        </span>
      </div>
    </section>
  )
}
