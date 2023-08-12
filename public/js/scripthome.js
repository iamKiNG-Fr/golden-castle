

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const icon = document.querySelector(".icon");

function navFunction(){
    // console.log('hello');
      var nav = document.querySelector(".nav");
      if (nav.className === "nav") {
        nav.className += " responsive";
      } else {
        nav.className = "nav";
      }
}
// icon.addEventListener('click', navFunction())
icon.addEventListener('click', navFunction)

// console.log(window.onload);

