import React from 'react'
import { Link } from 'react-router-dom'

function Feed() {
  return (
    <div>
      <h1>Page Feed</h1>

      <Link to="/post">
      <button>Add Novo Livro</button>
      </Link>
    </div>
  )
}

export default Feed