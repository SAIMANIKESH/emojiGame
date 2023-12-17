// Write your code here.

import './index.css'

const WinOrLossCard = props => {
  const {winOrLossDetails, score} = props

  let result = null
  let displayTitle = null
  let image = null

  if (winOrLossDetails === true) {
    result = 'Won'
    displayTitle = 'Best Score'
    image = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    result = 'Lose'
    displayTitle = 'Score'
    image = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  const onClickPlayAgain = () => {
    const storedTopScore = localStorage.getItem('topScored')

    if (parseInt(storedTopScore) < score) {
      localStorage.setItem('topScored', score)
    }
  }

  return (
    <div className="app-container">
      <div className="win-lose-card">
        <h1 className="heading">You {result}</h1>
        <p className="best-score">{displayTitle}</p>
        <p className="score-display">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLossCard
