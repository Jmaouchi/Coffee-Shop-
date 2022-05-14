// in this case, we also have a method that will save the session.
async function signupFormHandler(event) {
  event.preventDefault();


    if (response.ok) {
      // after the account is been created, reffer them to another page 
      document.location.replace('/html/login')
    } else {
      alert(response.statusText);
    }
  }




document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
