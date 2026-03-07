import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ChapterView from './components/ChapterView'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capitulo/:id" element={<ChapterView />} />
      </Routes>
    </div>
  )
}
