import React from "react";
import Rock from "./images/rock.svg";
import Paper from "./images/paper.svg";
import Scissors from "./images/scissors.svg";

const Game = () => {
  return (
    <main>
      <h1>
        Hello, <span className="player-name">Player</span>
      </h1>
      <section className="scoreboard">
        <div className="games">
          <h2>
            Games <span>0</span>
          </h2>
        </div>
        <div className="wins">
          <h2>Wins</h2>
          <span className="span">0</span>
        </div>
        <div className="losses">
          <h2>Losses</h2>
          <span className="span">0</span>
        </div>
        <div className="draws">
          <h2>Draws</h2>
          <span className="span">0</span>
        </div>
      </section>
      <section className="icons">
        <div id="rock">
          <img src={Rock} alt="" />
        </div>
        <div id="paper">
          <img src={Paper} alt="" />
        </div>
        <div id="scissors">
          <img src={Scissors} alt="" />
        </div>
      </section>
      <section className="button">
        <button className="reset-button">Reset</button>
      </section>
      <section className="input">
        <input type="text" id="#input" maxLength="10" />
        <button className="submit-button">Submit</button>
      </section>
    </main>
  );
};

export default Game;
