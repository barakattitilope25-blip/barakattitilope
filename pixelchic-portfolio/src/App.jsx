import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ExplorationsPage from './pages/ExplorationsPage'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/explorations" element={<ExplorationsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
