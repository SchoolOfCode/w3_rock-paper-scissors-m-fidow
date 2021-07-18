import React from "react";

const Game = () => {
  return (
    <main>
      <h1>
        Hello, <span class="player-name">Player</span>
      </h1>
      <section class="scoreboard">
        <div class="games">
          <h2>
            Games <span>0</span>
          </h2>
        </div>
        <div class="wins">
          <h2>Wins</h2>
          <span class="span">0</span>
        </div>
        <div class="losses">
          <h2>Losses</h2>
          <span class="span">0</span>
        </div>
        <div class="draws">
          <h2>Draws</h2>
          <span class="span">0</span>
        </div>
      </section>
      <section class="icons">
        <div id="rock">
          <img src="/images/rock.svg" alt="" />
        </div>
        <div id="paper">
          <img src="/images/paper.svg" alt="" />
        </div>
        <div id="scissors">
          <img src="/images/scissors.svg" alt="" />
        </div>
      </section>
      <section class="button">
        <button class="reset-button">Reset</button>
      </section>
      <section class="input">
        <input type="text" id="#input" maxlength="10" />
        <button class="submit-button">Submit</button>
      </section>
    </main>
  );
};

export default Game;
