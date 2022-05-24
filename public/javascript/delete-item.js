async function deleteFormHandler(event) {
  event.preventDefault();

  let attr = document.querySelector('.fa-times').getAttribute('data-x');
  console.log(attr);

  if (event.target.matches('.fa-times')) {

    // im working on getting a div section to show if a user want to delete the item, and the section will be to prompt the user as follow, are
    // you sure you want to remove this item!

    event.target.parentElement.remove();

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
}

document.querySelector('.cart-items-container').addEventListener('click', deleteFormHandler);
