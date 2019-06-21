import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { signalRConnection } from "./app";

type CardImage = 'Spades' | 'Diamonds' | 'Hearts' | 'Clubs';
type CardValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
interface ICard {
  type: CardImage
  value: CardValue
}

export const CardsDealer = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    const updateCards = (newCards: ICard[]) => {
      setCards(newCards);
    };

    signalRConnection.on('newCardsDealed', updateCards);
    return () => {
      signalRConnection.off('newCardsDealed', updateCards);
    }
  });

  const dealCards = () => {
    signalRConnection.send('dealCards');
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button style={{ margin: "1em auto", display: "block" }} onClick={dealCards}>Deal cards</button>

      {cards.map(card => (
        <Card {...card} key={card.type + card.value} />
      ))}
      <hr />
    </div>
  );
};
