import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'
import NotFound from './pages/NotFound/NotFound'
import ToDoDetail from './pages/ToDoDetail/ToDoDetail'

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home title="Home test" />} />
          <Route path="/todos/:id" element={<ToDoDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
