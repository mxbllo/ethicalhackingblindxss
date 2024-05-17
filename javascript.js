var tab = document.getElementsByClassName("tab");

for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var par = this.nextElementSibling;
    if (par.style.display === "block") {
      par.style.display = "none";
    } else {
      par.style.display = "block";
    }
  });
}


