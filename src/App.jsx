import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './Pages/Main'
import Menu from './Pages/Menu'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App

