let numberOfDrinks = 0;

const submitOrder = function (name) {
  numberOfDrinks++;

  if (numberOfDrinks < 5) {
    document.querySelector('.order-details').innerHTML = name + " would like a drink!";
  } else {
    alert("Drink order queue is full. Please try ordering again in a few minutes.");
  }

  updateOrderCount(numberOfDrinks);
};

const updateOrderCount = (count) => {
  document.getElementById('drink-count').innerHTML = "Drinks Ordered: " + count;
};


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById('order-btn').onclick = function () {
      submitOrder(document.getElementById('order-form-input').value);
    };

});
