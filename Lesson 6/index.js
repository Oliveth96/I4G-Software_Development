const change = document.querySelector('p');

change.addEventListener('click', changeName);

function changeName() {
  const name = prompt('Enter a new name');
  change.textContent = `Player 1: ${name}`;
}
