import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { signalRConnection } from "./app";

export interface IPlayer {
  name: string;
  cards: {
    type: string;
    value: string;
  }[];
}

export const OtherPlayers = () => {
  /* const players = [
    { name: "Dan", cards: [{ type: "Spades", value: "Q" }, { type: "Diamonds", value: "A" }] },
    { name: "Willy", cards: [{ type: "Clubs", value: "J" }, { type: "Diamonds", value: "A" }] },
    { name: "Billy", cards: [{ type: "Hearts", value: "J" }, { type: "Diamonds", value: "K" }] },
  ]; */

  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    const updatePlayers = (players: IPlayer[]) => {
      setPlayers(players);
    };
    signalRConnection.on("cardsTakenOut", updatePlayers);

    return () => {
      signalRConnection.off("cardsTakenOut", updatePlayers);
    };
  });

  return (
    <div style={{ display: "inline-block", width: "67vw", overflowX: "auto", whiteSpace: "nowrap", marginLeft: "1em", verticalAlign: "top" }}>
      {players.map(player => (
        <div key={player.name} style={{ textAlign: "center", margin: "1em", display: "inline-block" }}>
          <div style={{ textAlign: "center", paddingBottom: "1em" }}>{player.name}</div>
          {player.cards.map(card => (
            <Card {...card} key={card.type + card.value + player.name} big={false} />
          ))}
        </div>
      ))}
    </div>
  );
};
