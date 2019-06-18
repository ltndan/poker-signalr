import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { GameDestroyer } from "./gameDestroyer";
import { CardsDealer } from "./cardsDealer";
import { MyCards } from "./myCards";
import { OtherPlayers } from "./otherPlayers";
import * as signalR from "@aspnet/signalr";
import Explosion from "react-explode/Explosion10";

export const signalRConnection = new signalR.HubConnectionBuilder().withUrl("/pokerhub").build();
signalRConnection.start();

const App = () => {
  const [destroy, setDestroy] = useState(false);

  useEffect(() => {
    const showDestroy = () => {
      setDestroy(true);
    };
    signalRConnection.on("destroy", showDestroy);

    return () => {
      signalRConnection.off("destroy", showDestroy);
    };
  });

  return destroy ? (
    <div style={{ textAlign: "center" }}>
      <Explosion size="800" delay={0} repeatDelay={0.1} repeat={5} />
    </div>
  ) : (
    <div>
      <GameDestroyer />
      <CardsDealer />
      <MyCards />
      <OtherPlayers />
    </div>
  );
};

render(<App />, document.getElementById("root"));
