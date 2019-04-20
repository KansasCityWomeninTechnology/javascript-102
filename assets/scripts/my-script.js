const cocktailsArray = [{
    'id': 'focusedLady',
    'label': 'Focused Lady',
    'isAvailable': true
},
{
    'id': 'strongLady',
    'label': 'Strong Lady',
    'isAvailable': true
},
{
    'id': 'frontEndPunch',
    'label': 'Front-End Punch',
    'isAvailable': true
},
{
    'id': 'cachedOut',
    'label': 'Cached Out',
    'isAvailable': false
},
{
    'id': 'httPapaya',
    'label': 'httPAPAYA://',
    'isAvailable': false
},
{
    'id': 'nerdyDaiquiri',
    'label': 'Nerdy Daiquiri',
    'isAvailable': false
},
{
    'id': 'theAvernaCode',
    'label': 'The Averna Code',
    'isAvailable': false
},
{
    'id': 'focusedTheMostest',
    'label': 'Focused the Mostest',
    'isAvailable': false
},
];

const buildCocktailsMenu = (cocktails) => {
    let cocktailsString = '';
    const availableDrinks = cocktails.filter( (arrayElement) => {
        return arrayElement.isAvailable === true;
    });

    availableDrinks.forEach( (cocktail) => {
        cocktailsString += `<label class="radio" for="${cocktail.id}"><input type="radio" id="${cocktail.id}" name="drink" value="${cocktail.label}">${cocktail.label}</label>`;
    });

    document.querySelector('.radio-group').innerHTML = cocktailsString;
};

const submitOrder = (name, drink) => {
    let node = document.createElement('h3');
    const textNode = document.createTextNode(name + " would like a " + drink);
    node.appendChild(textNode);
    document.querySelector('.order-details').appendChild(node);
};

document.addEventListener("DOMContentLoaded", (event) => {

    buildCocktailsMenu(cocktailsArray);

    document.getElementById('order-btn').addEventListener('click', () => {
        const drinkElement = document.querySelector('input[type="radio"]:checked');
        const orderName = document.getElementById('order-form-input').value.trim();
        if (orderName && drinkElement) {
            submitOrder(orderName, drinkElement.value);
        }
    });

});