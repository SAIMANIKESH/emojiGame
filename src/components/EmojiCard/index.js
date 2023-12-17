// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, isEmojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojis = () => {
    isEmojiClicked(id)
  }

  return (
    <li className="emoji-card-item">
      <button type="button" onClick={onClickEmojis} className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
