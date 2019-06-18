localStorage.setItem(
  "mode",
  (localStorage.getItem("mode") || "dark") === "dark" ? "dark" : "light"
);
localStorage.getItem("mode") === "dark"
  ? document.querySelector("body").classList.add("dark")
  : document.querySelector("body").classList.remove("dark");

document.addEventListener("DOMContentLoaded", event => {
  (localStorage.getItem("mode") || "dark") === "dark"
    ? document.querySelector("body").classList.add("dark")
    : document.querySelector("body").classList.remove("dark");
});

  function myNightMode() {
    let element = document.getElementById("weather");
     

     if (element.className === "sun") {
        element.classList.add('moon');
        element.classList.remove('sun');
     } else {
        element.classList.add('sun');
        element.classList.remove('moon');
     }
    
  }



  function tabDev() {
    let tabDev = document.getElementById("tabdev");
    let intro = document.getElementsByClassName("intro")[0];
    let allproject = document.getElementsByClassName("wrap-projects")[0];
    let linkActive = document.getElementById("link-post").children[0];

    if (tabDev.style.display !== "block" && intro.style.display !== "none" && allproject.style.display !== "none") {
      tabDev.style.display = "block";
      intro.style.display = "none";
      allproject.style.display = "none";
      linkActive.classList.add('active-link');
    } else {
      tabDev.style.display = "none";
      intro.style.display = "block";
      allproject.style.display = "block";
      linkActive.classList.remove("active-link");
    }
  }
  function tabGraphic() {
    let graphic = document.getElementById("tab-graphic");
    let intro = document.getElementsByClassName("intro")[0];
    let allproject = document.getElementsByClassName("wrap-projects")[0];
    let linkActive = document.getElementById("link-post").children[1];

    if (graphic.style.display !== "block" && intro.style.display !== "none" && allproject.style.display !== "none") {
      graphic.style.display = "block";
      intro.style.display = "none";
      allproject.style.display = "none";
      linkActive.classList.add('active-link');
    } else {
      graphic.style.display = "none";
      intro.style.display = "block";
      allproject.style.display = "block";
      linkActive.classList.remove("active-link");
    }
  }





//   var isMobileVersion = document.getElementsByClassName('snake--mobile');
// if (isMobileVersion.length > 0) {
//     // elements with class "snake--mobile" exist
// }