
async function newItemHandler(event) {
  event.preventDefault();
  const item_name = document.querySelector('input[name="iten_name"]').value;
  const item_price = document.querySelector('input[name="item_price"]').value;
  const item_image = document.querySelector('[""]').value;

  const response = await fetch('/api/items', {
    method: 'POST',
    body: JSON.stringify({
      item_name,
      item_price,
      item_image
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.new-item-form-1').addEventListener('click', newItemHandler);
document.querySelector('.new-item-form-2').addEventListener('click', newItemHandler);
document.querySelector('.new-item-form-3').addEventListener('click', newItemHandler);
document.querySelector('.new-item-form-4').addEventListener('click', newItemHandler);
document.querySelector('.new-item-form-5').addEventListener('click', newItemHandler);
document.querySelector('.new-item-form-6').addEventListener('click', newItemHandler);