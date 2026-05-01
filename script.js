//optimised code
//Number show & Prizes Display
const button=document.getElementById("btn");
button.addEventListener("click", () => {
const value =(Math.floor(Math.random()*10))
const box= document.getElementById("text-box").innerHTML=value;
button.addEventListener("click",()=>{
  const prizes = [
  "₹5 Discount!!!","Better Luck Next Time!!!","₹10 Discount!!!","₹3 Discount!!!","Better Luck Next Time!!!",
  "Special Prize 🎁🎁!!!","₹2 Discount!!!","Better Luck Next Time!!!","₹8 Discount!!!","₹1 Discount!!!",
];const display=prizes[value];
console.log(display)
document.getElementById("text-suprise").innerHTML=display;
})
});
//Audio and Confetti animations
const jsconfetti=new JSConfetti();
const sound=new Audio("celebration.mp3");
button.addEventListener("click", () => {
jsconfetti.addConfetti()
sound.play()
sound.currentTime=0;
});

