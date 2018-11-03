const Game = (_ => {
  const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const words = ['apple', 'cat', 'dog', 'ball', 'elephant'];
  let chosenWord;
  let guessingWord;
  let lives;
  let guesses;

  // cache the DOM
  const $hangman = document.querySelector('.hangman');


  const init = _ => {
    // 1 chose a word
    chosenWord = chooseWord();
    // 2 build our guessing word to  render
    guessingWord = Array(chosenWord.length).fill('_');
    guesses = [];
    lives = 7
  }

  const chooseWord = _ => {
    let randNum = Math.floor(Math.random() * words.length);
    return words[randNum]
  }
  return {
    init
  }
})();

export default Game;
