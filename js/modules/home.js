import Game from './game.js';
import How from './how.js';
import { sound } from './../data/sound.js';

const Home = (_ => {
  // $ gebruikt om te laten zien dat het een DOM element is. $hangman is gelijk aan hongmanEl.
  const $hangman = document.querySelector('.hangman');
  
  const init = _ => {
    render();
    listeners();

  } 

  const render = _ => {
    let markup = '';
    markup += `
    <h1 class="hangman__title">Hangman</h12>
    <button class="button start">New Game</button>
    <button class="button instructions">Instructions</button>
    `
    $hangman.innerHTML = markup;
  }

  const listeners = _ => {
    document.querySelector('.start').addEventListener('click', _ => {
      Game.init();
      sound.click.play();
    })
    document.querySelector('.instructions').addEventListener('click', _ => {
      How.init();
      sound.click.play();
    })
  }

  return {
    init
  }

})();

export default Home;
