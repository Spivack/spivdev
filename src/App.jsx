import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-primary text-ink-primary font-sans">
      <Nav />
      <div className="lg:ml-52">
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="py-8 px-6 border-t border-edge text-center">
          <p className="text-ink-muted font-mono text-xs">
            &copy; {new Date().getFullYear()} Evan Spivack
          </p>
        </footer>
      </div>
    </div>
  )
}
