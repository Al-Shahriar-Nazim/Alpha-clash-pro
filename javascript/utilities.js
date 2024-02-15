function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  console.log(element);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setAlpabetElementById(elementId){
  const element=document.getElementById(elementId)
  element.classList.add('bg-orange-500')
}
// vedio 7
function getRandomAlphabet(){
  const alphabetSring='abcdefghijklmnopqrstuvwxyz';
  const alphabets=  alphabetSring.split('');
  // (26) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  console.log(alphabets)
// get a random index between (0-25)
const randomNumber =Math.random()*25;
const index =Math.round(randomNumber);
// console.log(index)

const alphabet =alphabets[index]
// console.log(index,alphabet)
return alphabet;
}
