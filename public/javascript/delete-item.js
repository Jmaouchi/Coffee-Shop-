async function deleteFormHandler(event) {
  event.preventDefault();

  let attr = document.querySelector('.fa-times').getAttribute('data-x');
  // console.log(attr);
  if (event.target.matches('.fa-times')) {
    event.target.parentElement.remove();
  }

  const id = attr;
  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.cart-items-container').addEventListener('click', deleteFormHandler);
