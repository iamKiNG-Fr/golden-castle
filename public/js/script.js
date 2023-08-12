
// JS for contact form

const eventType = document.querySelector('#type')
const eventdiv = document.querySelector('.event')
const enquirydiv = document.querySelector('.enquiry')
const cateringdiv = document.querySelector('.cater')
const videodiv = document.querySelector('.video')
if (eventType != null) {
    eventType.addEventListener('change', ()=>{
        if(eventType.value == 'video'){
            // console.log('video');
            eventdiv.style.display = 'none';
            enquirydiv.style.display = 'none';
            videodiv.style.display = 'block';
            cateringdiv.style.display = 'none';
    
        } else if(eventType.value == 'cater'){
            // console.log('enquiry');
            eventdiv.style.display = 'none';
            enquirydiv.style.display = 'none';
            videodiv.style.display = 'none';
            cateringdiv.style.display = 'block';
        
        }else if(eventType.value == 'enquiry'){
            // console.log('enquiry');
            eventdiv.style.display = 'none';
            enquirydiv.style.display = 'block';
            videodiv.style.display = 'none';
            cateringdiv.style.display = 'none';
    
            
        } else {
            // console.log('event');
            eventdiv.style.display = 'block';
            enquirydiv.style.display = 'none';
            videodiv.style.display = 'none';
            cateringdiv.style.display = 'none';
    
        }
    })
}


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


// Js for Nav
// initial scroll position

var prevScrollPos = window.scrollY
window.addEventListener('scroll', ()=>{
    
    // current scroll position
    var currentScrollPos = window.scrollY
    
    console.log(currentScrollPos, prevScrollPos);
    // when scroll down
    if (prevScrollPos < currentScrollPos) {
        // hide nav
        document.querySelector('.nav').classList.add('show')
    } else {
        // hide nav
        document.querySelector('.nav').classList.remove('show')
    }

    prevScrollPos = currentScrollPos
})


