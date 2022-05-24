async function newItemHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="item_name"]').value;
    const price = document.querySelector('input[name="item_price"]').value;
    const image = document.querySelector('[""]').value;

    const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({
            name,
            price,
            image
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

document.querySelector('.new-item-form').addEventListener('submit', newItemHandler);