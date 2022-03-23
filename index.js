var randomItems = document.querySelectorAll(".randomItem");

var randomSelector = randomNoRepeats([...randomItems]);

const randomSelectorInterval = setInterval(function () {
  randomSelector();
}, 2000);

function randomNoRepeats(array) {
  var copy = array.slice(0); //slice(0) creates a new array identical to the original array
  //Many times you want to preserve your original array and create a new one.
  //If you use slice(1) , it will create a different array starting from index position 1.

  return function () {
    array.forEach(function (el) {
      el.classList.remove("active"); //removing the active class
      // The classList property is read-only, but you can use add() and remove() methods to add or remove CSS classes.
    });
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length); // to get a random number between 0 and n
    // Will return a integer between 0 and 4 index in this case as we have 5 divs, length of array is 5
    var item = copy[index];

    copy.splice(index, 1); // go from index & remove one element
    console.log(copy);
    item.classList.add("active"); //adding the active class

    return item;
  };
}
