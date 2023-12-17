// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, winOrLoss} = props

  const hideScoreBoard = winOrLoss === null

  return (
    <nav className="navbar">
      <div className="emoji-logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo-img"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {hideScoreBoard && (
        <div className="score-card">
          <p className="score-board">Score: {score}</p>
          <p className="score-board">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
