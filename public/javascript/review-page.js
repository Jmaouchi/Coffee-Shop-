// in this case, we also have a method that will save the session.
async function signupFormHandler(event) {
  event.preventDefault();
  const review_text = document.querySelector('#Textarea1').value.trim();
  if (review_text) {
    // post the data to this endpoint to create an account, and in the backend it will be the another post to post the data to the database with a create methode
    const response = await fetch('/api/reviews', {
      method: 'post',
      body: JSON.stringify({
        review_text,
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
<<<<<<< HEAD
      // after the account is been created, reffer them to another page 
=======
      // after the account is been created, reffer them to another page
>>>>>>> 44501217e46784a57c9f739d72705de3386c106a
      document.location.replace('/')
    } else {
      alert(response.statusText);
    }
<<<<<<< HEAD
  };




document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
=======
  }
}
document.getElementById('submit-review').addEventListener('click', signupFormHandler)
>>>>>>> 44501217e46784a57c9f739d72705de3386c106a
