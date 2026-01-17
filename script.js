//your JS code here. If required.
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

let count = 0; 

incrementBtn.addEventListener("click", () => {
  alert(count);          
  count++;               
  counter.textContent = count;
});
