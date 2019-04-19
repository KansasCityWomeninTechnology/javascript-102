const submitOrder = function (name) {
    alert(name + " would like a drink!");
};

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById('order-btn').onclick = function () {
        const drinkName = document.querySelector('input[type="radio"]:checked').value;
        console.log(drinkName);
        submitOrder(document.getElementById('order-form-input').value);
    };

});
