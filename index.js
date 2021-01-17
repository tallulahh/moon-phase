let image;
    var pageImage = document.querySelector("img");
var phase = document.querySelector("#phase");
var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth()+1;
    var yy = d.getFullYear();
var Moon = {
  phase: function (yy,mm,dd) {
    
    var c = e = jd = b = 0;

    if (mm < 3) {
      yy--;
      mm += 12;
    }

    ++mm;
    c = 365.25 * yy;
    e = 30.6 * mm;
    jd = c + e + dd - 694039.09; 
    jd /= 29.5305882; 
    b = parseInt(jd); 
    jd -= b;
    b = Math.round(jd * 8); 

    if (b >= 8) b = 0; 
    
    switch (b) {
      case 0:
        pageImage.src = "https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Moon.jpg";
        phase.innerHTML = 'New-Moon';
        break;
      case 1:
        pageImage.src = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Crescent_Moon.JPG';
        phase.innerHTML = 'Waxing-Crescent-Moon';
        break;
      case 2:
        pageImage.src = "https://www.refinery29.com/images/9879630.jpg";
        phase.innerHTML = 'Quarter-Moon';
        break;
      case 3:
        pageImage.src = "https://www.refinery29.com/images/9879638.jpg?format=jpg&width=1090&height=1308&quality=80";
        phase.innerHTML = 'Waxing-Gibbous-Moon';
        break;
      case 4:
        pageImage.src = "https://www.refinery29.com/images/9879644.jpg?format=jpg&width=1090&height=1307&quality=80";
        phase.innerHTML = 'Full-Moon';
        break;
      case 5:
        pageImage.src = "https://www.refinery29.com/images/9879647.jpg?format=jpg&width=1090&height=1308&quality=80";
        phase.innerHTML = 'Waning-Gibbous-Moon';
        break;
      case 6:
        pageImage.src = "https://www.refinery29.com/images/9879651.jpg";
        phase.innerHTML = 'Last-Quarter-Moon';
        break;
      case 7:
        pageImage.src = "https://www.refinery29.com/images/9879656.jpg";
        phase.innerHTML = 'Waning-Crescent-Moon';
        break;
    }
  }
};

document.addEventListener("keydown", function(e){
  if (e.keyCode === 13){
    dd = document.getElementById("day").value;
    mm = document.getElementById("month").value;
    yy = document.getElementById("year").value;
    Moon.phase(yy,mm,dd);
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.querySelector(".imageHeader").innerHTML = `Moon phase on ${dd}/${mm}/${yy}: `;
  }
});

const search = document.querySelector(".searchBtn");
search.addEventListener("click", function(){
  document.querySelector(".main").style.opacity = "1";
})

window.onload = function(){
  Moon.phase(yy,mm,dd);
}
