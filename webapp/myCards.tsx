import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { signalRConnection } from "./app";
import { IPlayer } from "./otherPlayers";

export const MyCards = () => {
  const [name, setName] = useState("");
  const [noModeCards, setNoModeCards] = useState(false);
  // const cards = [{ type: "Spades", value: "Q" }, { type: "Diamonds", value: "A" }];
  const [cards, setCards] = useState<{ type: string; value: string }[]>([]);

  useEffect(() => {
    const updateMyCards = (players: IPlayer[]) => {
      const me = players.find(x => x.name == name);
      if (me) {
        setCards(me.cards);
      } else {
        setCards([]);
      }
    };
    signalRConnection.on("cardsTakenOut", updateMyCards);

    return () => {
      signalRConnection.off("cardsTakenOut", updateMyCards);
    };
  });

  useEffect(() => {
    const showNoModeCards = () => {
      setNoModeCards(true);
    };
    signalRConnection.on("deckEmpty", showNoModeCards);

    return () => {
      signalRConnection.off("deckEmpty", showNoModeCards);
    };
  });

  const gimmeCards = () => {
    signalRConnection.send("GetTwoCards", name);
  };

  return (
    <div style={{ borderRight: "1px solid grey", textAlign: "center", display: "inline-block", width: "30vw" }}>
      {!noModeCards ? (
        <div style={{ display: "flex", margin: "1em" }}>
          <input
            type="text"
            placeholder="enter your name"
            style={{ flex: "1" }}
            value={name}
            onChange={event => setName((event.target as HTMLInputElement).value)}
          />
          <button style={{ marginLeft: "1em" }} onClick={gimmeCards}>
            Gimme cards
          </button>
        </div>
      ) : (
        <div>No mode cards in the deck</div>
      )}
      {cards.map(card => (
        <Card {...card} key={card.type + card.value} big={false} />
      ))}
    </div>
  );
};
