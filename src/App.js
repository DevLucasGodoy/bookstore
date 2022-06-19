import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './pages/Post/post'
import Edit from './pages/Edit/edit'
import LerMais from './pages/LerMais/ler'
import Feed from './pages/Feed/feed'
import './styles/global.css'

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
