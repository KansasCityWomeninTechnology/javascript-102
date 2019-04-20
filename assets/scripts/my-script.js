const submitOrder = (name, drink) => {
    let node = document.createElement('h3');
    const textNode = document.createTextNode(name + " would like a " + drink);
    node.appendChild(textNode);
    document.querySelector('.order-details').appendChild(node);
};

document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById('order-btn').addEventListener('click', () => {
        const drinkName = document.querySelector('input[type="radio"]:checked').value;
        const orderName = document.getElementById('order-form-input').value;
        submitOrder(orderName, drinkName);
    });

});
