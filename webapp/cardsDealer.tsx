import React from "react";
import { Card } from "./card";

export const CardsDealer = () => {
  const cards = [
    { type: "Spades", value: "3" },
    { type: "Diamonds", value: "4" },
    { type: "Hearts", value: "3" },
    { type: "Clubs", value: "7" },
    { type: "Clubs", value: "K" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <button style={{ margin: "1em auto", display: "block" }}>Deal cards</button>

      {cards.map(card => (
        <Card {...card} key={card.type + card.value} />
      ))}
      <hr />
    </div>
  );
};
