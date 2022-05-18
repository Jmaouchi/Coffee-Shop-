const myTimeout = setInterval(myGreeting, 50000);
let spinnerWrapper = document.querySelector('.spinner-wrapper');

function myGreeting() {
  window.addEventListener('load', function(){
    spinnerWrapper.style.display = 'none'
  })
}

myGreeting();