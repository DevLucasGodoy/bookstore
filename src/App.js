import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './pages/post'
import Edit from './pages/edit'
import LerMais from './pages/ler'
import Feed from './pages/feed'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/ler" element={<LerMais />} />
      </Routes>
    </Router>
  )
}

export default App
