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
      // after the account is been created, reffer them to another page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}
document.getElementById('submit-review').addEventListener('click', signupFormHandler);