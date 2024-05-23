let irany = 1;
function flip() {
  if (irany == 1) {
    document.getElementById("kep").style.transform = "rotateY(180deg)";
    irany = 2;
  } else {
    document.getElementById("kep").style.transform = "rotateY(360deg)";
    irany = 1;
  }
}
