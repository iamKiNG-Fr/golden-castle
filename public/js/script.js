// Js for Nav
// initial scroll position
let prevScrollPos = window.scrollY

window.addEventListener('scroll', ()=>{
    
    // current scroll position
    const currentScrollPos = window.scrollY
    
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




// JS for contact form

const eventType = document.querySelector('#type')
const eventdiv = document.querySelector('.event')
const enquirydiv = document.querySelector('.enquiry')
const cateringdiv = document.querySelector('.cater')
const videodiv = document.querySelector('.video')

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


