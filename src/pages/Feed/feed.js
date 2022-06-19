import React from 'react'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import More from '../../images/more.svg'
import './feed.css'

function Feed() {
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Texto 01</h2>
              <img src={More} />
            </header>
            <div className="line"></div>
            <p>textotextotexto</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Feed
