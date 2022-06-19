import React from 'react'
import { Link } from 'react-router-dom'
import './headerMain.css'

function HeaderMain() {
    return (
        <header>
            <div className="container">
                <div className="logo" >
                    <h1>Bookstore CRUD</h1>
                </div>
                <div className="btn-newPost" >
                    <Link to="/post" >
                        <button>Add Novo Livro</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default HeaderMain