// const shopping = document.querySelector('.fa-shopping-cart');

// function showItems () {
//   document.location.replace('/here');
// }

async function newItemHandler(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-1').textContent;
  const item_price = document.querySelector('.price-1').textContent;
  const item_image = '/images/cart-item-1.png';
  console.log(item_image);


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
// shopping.addEventListener('click', showItems);