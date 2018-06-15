let numberOfDrinks = 0;

const submitOrder = function (name, drink) {
  numberOfDrinks++;

  if (numberOfDrinks < 5) {
    let node = document.createElement('h3');
    const textNode = document.createTextNode(name + " would like a " + drink);
    node.appendChild(textNode);

    document.querySelector('.order-details').appendChild(node);
  } else {
    alert("Drink order queue is full. Please try ordering again in a few minutes.");
  }

  updateOrderCount(numberOfDrinks);
};

const updateOrderCount = (count) => {
  document.getElementById('drink-count').innerHTML = "Drinks Ordered: " + count;
};


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById('order-btn').addEventListener('click', function () {
      const orderName = document.getElementById('order-form-input').value;
      const drinkName = document.querySelector('input[type="radio"]:checked').value;
      submitOrder(orderName, drinkName);
    });

    document.getElementById('order-btn').addEventListener('click', function () {
      console.log('second click handler');
    });
});
