document.getElementById("btn").addEventListener("click", () => {
const value =(Math.floor(Math.random()*10+1))
document.getElementById("box").innerHTML=value;
const jsconfetti=new JSConfetti();
const sound=new Audio("celebration.mp3");
jsconfetti.addConfetti()
sound.play()
sound.currentTime=0;
const prizes = [
  "₹5 Discount!!!","Better Luck Next Time!!!","₹10 Discount!!!","₹3 Discount!!!","Better Luck Next Time!!!",
  "Special Prize 🎁🎁!!!","₹2 Discount!!!","Better Luck Next Time!!!","₹8 Discount!!!","₹1 Discount!!!",
  "Better Luck Next Time!!!","₹12 Discount!!!","₹4 Discount!!!","Better Luck Next Time!!!","₹6 Discount!!!"
];const display=prizes[value];
console.log(display)
document.getElementById("text-suprise").innerHTML=display;
});
