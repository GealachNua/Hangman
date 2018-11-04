import { sound } from "../data/sound.js";
import Home from "./home.js";

const How = (_ => {
  const $hangman = document.querySelector('.hangman');

  const init = _ => {
    render();
    listeners();
  }

  const listeners = _ => {
    document.querySelector('.hangman__trigger').addEventListener('click', _ => {
      sound.click.play();
      Home.init();
    })
  }

  const render = _ => {
    let markup = `
    <h1 class="hangman__title">Instructions</h1>
    <ul class="how">
      <li>Here is how to play</li>
     <li>When you start a new game, the game will automatically select a rondom word</li>
     <li>Your job is to guess that chosen word completely by guessing a letter a time</li>
      <li> If you succesfully guess the word within 7 tries, you win or else you lose.</li>
     <li>If you lose, you will be hanged without mercy</li>
    </ul>
    <button class="button hangman__trigger">Main Menu</button>
    `
    $hangman.innerHTML = markup;
  }

  return {
    init
  }
})();

export default How;