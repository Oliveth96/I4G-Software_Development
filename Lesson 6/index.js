/**
 *Declare a variable change and assigns a query that selects the html tag '<p></p>'
 from the html document
*/
const change = document.querySelector('p');

// Adds an event listener which runs the function changeName when clicked upon
change.addEventListener('click', changeName);

/**
 * Function: that creates a constant which prompts users to enter a name. 
 * The function stores the names typed in and changes the content of the <p></p> tag. 
 * Recall we already assigned it to a constant - change, so the function changes the content of the constant
 */
function changeName() {
  const name = prompt('Enter a new name');
  change.textContent = `Player 1: ${name}`;
}


