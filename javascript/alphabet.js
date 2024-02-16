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

// module 28 (part 1)
// call back function
// function handleKeyBoardButtonPress(){
//   console.log('Thankyou for today')
// }
// document.addEventListener('keyup', handleKeyBoardButtonPress)
function handleKeyBoardButtonPress(event){
  const playerPrassed=event.key
  console.log( 'playerPrassed',event.key)

  // get the excepted to pressed
  const currentAlphabetElement=document.getElementById('current-alphabets')
  const currentAlphabet=currentAlphabetElement.innerText;
  const exceptedAlphabets=currentAlphabet.toLowerCase();
  console.log(playerPrassed,exceptedAlphabets )

  // cheak match or not
  if(playerPrassed===exceptedAlphabets){
    console.log('You get point')

    // update score
    // step-1: get the current score
    const currentScoreElement=document.getElementById('current-score')
 const currentScoreText=currentScoreElement.innerText;
    const currentScore=parseInt(currentScoreText)
    // console.log( typeof currentScore)
    // step-2: reduce the life count
    const newScore =currentScore+1;
    // step-3 : Display the update life count
    currentScoreElement.innerText=newScore;

    removeBackgroundColorById(exceptedAlphabets)
    conintueGame();
    // remove backgraound clicked after

  }else{
    console.log('You lost')
    // step-1 :get the current life number
    const currentLifeElement=document.getElementById('current-life');
    const currentLifeText=currentLifeElement.innerText;
    const currentLife=parseInt(currentLifeText);
    // step-2 : Reduce the life count
    const newlife=currentLife-1;
    // step-3 : Display the updated life count
    currentLifeElement.innerText=newlife;
  }
}
document.addEventListener('keyup', handleKeyBoardButtonPress)
// vedio 7
function conintueGame(){
const alphabets =getRandomAlphabet( );
// console.log('Your random alphabets :',alphabets);
// ---vedio 8----
//set randomly generated alphabet to the screen (show it)
const currentAlphabetElements=document.getElementById('current-alphabets')
currentAlphabetElements.innerText=alphabets;
// set key background
setAlpabetElementById(alphabets)
}