import React from "react";
import { signalRConnection } from "./app";

export const GameDestroyer = () => {
  const destroyGame = () => {
    signalRConnection.send("DestroyGame");
  };

  return (
    <div style={{ textAlign: "right" }}>
      <button style={{ margin: "1em" }} onClick={destroyGame}>
        Destroy the game
      </button>
      <hr />
    </div>
  );
};
