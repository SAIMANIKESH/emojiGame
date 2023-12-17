import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

localStorage.setItem('topScored', 0)
const storedTopScore = localStorage.getItem('topScored')

class EmojiGame extends Component {
  state = {score: 0, topScore: storedTopScore, clickedList: [], winOrLoss: null}

  emojiGameCard = () => {
    const {emojisList} = this.props

    return (
      <ul className="emoji-card-items-container">
        {emojisList
          .sort(() => Math.random() - 0.5)
          .map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              isEmojiClicked={this.isEmojiClicked}
            />
          ))}
      </ul>
    )
  }

  isEmojiClicked = id => {
    const {clickedList} = this.state

    const result = clickedList.includes(id)

    if (result === false && clickedList.length < 11) {
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
        score: prevState.score + 1,
      }))
    } else if (result === true) {
      this.setState({winOrLoss: !result})
    } else {
      this.setState(prevState => ({
        winOrLoss: !result,
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {score, topScore, winOrLoss} = this.state
    const result = winOrLoss === null

    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} winOrLoss={winOrLoss} />
        <div className="game-container">
          {result ? (
            this.emojiGameCard()
          ) : (
            <WinOrLoseCard winOrLossDetails={winOrLoss} score={score} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
