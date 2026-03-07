import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import chapters from '../data/chapters'

export default function ChapterView() {
  const { id } = useParams()
  const currentId = parseInt(id)
  const chapter = chapters.find((ch) => ch.id === currentId)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!chapter) {
    return (
      <div className="chapter-layout">
        <main className="chapter-content">
          <h1>Capítulo no encontrado</h1>
          <Link to="/" className="back-link">← Volver al inicio</Link>
        </main>
      </div>
    )
  }

  const paragraphs = chapter.content
    .split('\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)

  return (
    <div className="chapter-layout">
      {/* Mobile sidebar toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">Capítulos</div>
        <nav className="sidebar-nav">
          {chapters.map((ch) => (
            <Link
              to={`/capitulo/${ch.id}`}
              key={ch.id}
              className={`sidebar-link ${ch.id === currentId ? 'sidebar-link--active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sidebar-link-number">0{ch.id}</span>
              {ch.title}
            </Link>
          ))}
        </nav>
        <Link to="/" className="sidebar-home" onClick={() => setSidebarOpen(false)}>
          ← Inicio
        </Link>
      </aside>

      {/* Main content */}
      <main className="chapter-content">
        <h1 className="chapter-title">{chapter.title}</h1>
        {chapter.subtitle && <p className="chapter-subtitle">{chapter.subtitle}</p>}
        <div className="chapter-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Prev / Next navigation */}
        <div className="chapter-nav">
          {currentId > 1 && (
            <Link to={`/capitulo/${currentId - 1}`} className="chapter-nav-link">
              ← Capítulo {currentId - 1}
            </Link>
          )}
          {currentId < chapters.length && (
            <Link to={`/capitulo/${currentId + 1}`} className="chapter-nav-link chapter-nav-link--next">
              Capítulo {currentId + 1} →
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
