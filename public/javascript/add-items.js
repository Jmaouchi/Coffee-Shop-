// First button listener
async function newItemHandlerOne(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-1').textContent;
  const item_price = document.querySelector('.price-1').textContent;
  const item_image = '/images/cart-item-1.png';

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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// second button listener
async function newItemHandlerTwo(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-2').textContent;
  const item_price = document.querySelector('.price-2').textContent;
  const item_image = '/images/cart-item-2.png';
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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// third button listener
async function newItemHandlerThree(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-3').textContent;
  const item_price = document.querySelector('.price-3').textContent;
  const item_image = '/images/cart-item-3.png';
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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// fourth button listener
async function newItemHandlerFour(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-4').textContent;
  const item_price = document.querySelector('.price-4').textContent;
  const item_image = '/images/cart-item-4.png';
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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// fifth button listener
async function newItemHandlerFifth(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-5').textContent;
  const item_price = document.querySelector('.price-5').textContent;
  const item_image = '/images/menu-1.png';
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
  } );
  if (response.ok) {
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// 6th button listener
async function newItemHandlerSix(event) {
  event.preventDefault();
  const item_name = document.querySelector('.heading-6').textContent;
  const item_price = document.querySelector('.price-6').textContent;
  const item_image = '/images/images/menu-1.png';
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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// 7th button listener
async function newItemHandlerSeven(event) {
  event.preventDefault();
  const item_name = 'Nicaragua Whole Bean';
  const item_price = document.querySelector('.price-7').textContent;
  const item_image = '/images/product-1.png';

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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// 8th button listener
async function newItemHandlerEight(event) {
  event.preventDefault();
  const item_name = 'Columbia Whole Bean';
  const item_price = document.querySelector('.price-8').textContent;
  const item_image = '/images/product-2.png';

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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}


// 9th button listener
async function newItemHandlerNine(event) {
  event.preventDefault();
  const item_name = 'Peru Whole Bean';
  const item_price = document.querySelector('.price-9').textContent;
  const item_image = '/images/product-3.png';

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
    document.location.replace('/items');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-item-form-1').addEventListener('click', newItemHandlerOne);
document.querySelector('.new-item-form-2').addEventListener('click', newItemHandlerTwo);
document.querySelector('.new-item-form-3').addEventListener('click', newItemHandlerThree);
document.querySelector('.new-item-form-4').addEventListener('click', newItemHandlerFour);
document.querySelector('.new-item-form-5').addEventListener('click', newItemHandlerFifth);
document.querySelector('.new-item-form-6').addEventListener('click', newItemHandlerSix);
document.querySelector('#add-to-card-1').addEventListener('click', newItemHandlerSeven);
document.querySelector('#add-to-card-2').addEventListener('click', newItemHandlerEight);
document.querySelector('#add-to-card-3').addEventListener('click', newItemHandlerNine);





