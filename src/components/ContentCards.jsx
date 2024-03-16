import { streamers } from '../constants/streamers'
import Card from './Card'

export default function ContentCards() {
  return streamers.map((card, index) => {
    return (
    <Card 
      key= {index}
      cover= {card.cover}
      cathegory= {card.cathegory}
      tags= {card.tags}
      connected={card.connected}
    />)
  })
}
