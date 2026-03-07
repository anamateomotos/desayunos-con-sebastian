import { Link } from 'react-router-dom'
import chapters from '../data/chapters'

export default function HomePage() {
  return (
    <main className="home">
      <div className="home-header">
        <h1>Capítulos</h1>
        <p className="home-subtitle">Selecciona un capítulo para leer</p>
      </div>
      <div className="chapter-grid">
        {chapters.map((ch) => (
          <Link to={`/capitulo/${ch.id}`} key={ch.id} className="chapter-card">
            <span className="chapter-card-number">0{ch.id}</span>
            <h2>{ch.title}</h2>
            {ch.subtitle && <p>{ch.subtitle}</p>}
          </Link>
        ))}
      </div>
    </main>
  )
}
