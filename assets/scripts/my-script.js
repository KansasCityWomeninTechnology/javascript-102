const submitOrder = (name) => {
    alert(name + " would like a drink!");
};

document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById('order-btn').onclick = () => {
        const drinkName = document.querySelector('input[type="radio"]:checked').value;
        console.log(drinkName);
        submitOrder(document.getElementById('order-form-input').value);
    };

});
