localStorage.setItem(
  "mode",
  (localStorage.getItem("mode") || "dark") === "dark" ? "light" : "dark"
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

$(document).ready(function(){
  $("#sort-tab").click(function() {
    $("#teste").toggleClass("hide-dev");
  });
})

  





//   var isMobileVersion = document.getElementsByClassName('snake--mobile');
// if (isMobileVersion.length > 0) {
//     // elements with class "snake--mobile" exist
// }