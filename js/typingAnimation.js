var typeText = document.querySelector("#type-text");
var textToBeTyped = "I'm a fullstack engineer.";
var index = 0,
  isAdding = true;

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped.slice(0, index);
    if (isAdding) {
      if (index > textToBeTyped.length) {
        isAdding = false;
        setTimeout(function () {
          playAnim();
        }, 3000);
        return;
      } else {
        // increment index by 1
        index++;
      }
    } else {
      // removing text
      if (index === 0) {
        isAdding = true;
      } else {
        index--;
      }
    }
    // call itself
    playAnim();
  }, 75);
}
// start animation
// playAnim();
setTimeout(playAnim, 1000);
