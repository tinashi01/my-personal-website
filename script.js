const h2 = document.createElement("h2");
h2.textContent = "";
document.querySelector("body").appendChild(h2);

function bigImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}
        
function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Use this code at checkout for 10% off! Code: PLUSHIE10"
  }

