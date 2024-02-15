// -----------way one--------------------------------------------------
// function play(){
//   // step-1 :Hide the home screen---------------------
// const homeSection =document.getElementById('home-screen')
// homeSection.classList.add('hidden')
// // step-2 :Show the playGround section----------------
// const playGroundSection=document.getElementById('play-ground')
// playGroundSection.classList.remove('hidden')
// // conintue game----------------------------------------
// continuegame()
// }

//------------------ way2-----------------------------
function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  conintueGame()
}

// vedio 7
function conintueGame(){
const alphabets =getRandomAlphabet( );
console.log('Your random alphabets :',alphabets);
// ---vedio 8----
//set randomly generated alphabet to the screen (show it)
const currentAlphabetElements=document.getElementById('current-alphabets')
currentAlphabetElements.innerText=alphabets;
// set key background
setAlpabetElementById(alphabets)
}