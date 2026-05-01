//optimised code
//Number show
const button=document.getElementById("btn");
button.addEventListener("click", () => {
const value =(Math.floor(Math.random()*10))
const box= document.getElementById("box").innerHTML=value;
});
//Audio and Confetti animations
button.addEventListener("click", () => {
const jsconfetti=new JSConfetti();
const sound=new Audio("celebration.mp3");
jsconfetti.addConfetti()
sound.play()
sound.currentTime=0;
});
//Prizes Display
button.addEventListener("click",()=>{
  const prizes = [
  "₹5 Discount!!!","Better Luck Next Time!!!","₹10 Discount!!!","₹3 Discount!!!","Better Luck Next Time!!!",
  "Special Prize 🎁🎁!!!","₹2 Discount!!!","Better Luck Next Time!!!","₹8 Discount!!!","₹1 Discount!!!",
];const display=prizes[value];
console.log(display)
document.getElementById("text-suprise").innerHTML=display;
})

