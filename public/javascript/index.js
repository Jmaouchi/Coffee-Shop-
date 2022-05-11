// start with the navbar whenever the screen is at 991px
let navbar = document.querySelector('.navbar');

// this will start show the menu after we click on the menu icon 
// i added a media query to the menu btn
document.querySelector('#menu-btn').onclick = () =>{
    // when you click on the menu btn, then the search form and the card items wont be displayed 
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    // when you click on the search form , then the menu btn and the card items wont be displayed 
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    // when you click on the  card items btn, then the search form and the menu btn wont be displayed 
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}



// This function will allow you to unhide the reviews when you click on the see all reviews button
const seeReview = document.querySelector('.random-btn-see');
const row = document.querySelector('.first-row');

seeReview.addEventListener('click', function(){
    row.classList.toggle('active');
    form.classList.remove('active')
})


// This function will allow you to unhide the div where you can add a review and hide the reviews, when you click on the add all reviews button
const addReview = document.querySelector('.random-btn-add');
const form = document.querySelector('.form-review');

addReview.addEventListener('click', () => {
    form.classList.toggle('active');
    row.classList.remove('active')
})




