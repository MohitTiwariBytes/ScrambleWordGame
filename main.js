document.addEventListener('DOMContentLoaded', () => {
    const words = ['javascript', 'react', 'firebase', 'python', 'html', 'css'];
    const scrambledWord = document.getElementById('scrambledWord');
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
  
    let currentWord = words[Math.floor(Math.random() * words.length)];
    let scrambled = currentWord.split('').sort(() => 0.5 - Math.random()).join('');
  
    scrambledWord.textContent = scrambled;
  
    guessButton.addEventListener('click', () => {
      const userGuess = guessInput.value.trim().toLowerCase();
      if (userGuess === currentWord) {
        message.textContent = 'Congratulations! You guessed the correct word!';
        message.style.color = 'green';
        guessButton.disabled = true;
      } else {
        message.textContent = 'Incorrect! Try again.';
        message.style.color = 'red';
      }
    });
  });
  