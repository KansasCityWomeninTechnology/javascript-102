const menu = {
    drinkArray: [{
        'id': 'focusedLady',
        'label': 'Focused Lady',
        'photoId': 'eXdKs9d37Sc'
    },
    {
        'id': 'strongLady',
        'label': 'Strong Lady',
        'photoId': 'gj7BLlSzIFs'
    },
    {
        'id': 'frontEndPunch',
        'label': 'Front-End Punch',
        'photoId': 'jcLcWL8D7AQ'
    },
    {
        'id': 'cachedOut',
        'label': 'Cached Out',
        'photoId': 'b8se0pUeaA0'
    },
    {
        'id': 'httPapaya',
        'label': 'httPAPAYA://',
        'photoId': 'pPhN8HFzkDE'
    },
    {
        'id': 'nerdyDaiquiri',
        'label': 'Nerdy Daiquiri',
        'photoId': 'paz5CWdB2ys'
    },
    {
        'id': 'theAvernaCode',
        'label': 'The Averna Code',
        'photoId': 'gtDYwUIr9Vg'
    },
    {
        'id': 'focusedTheMostest',
        'label': 'Focused the Mostest',
        'photoId': 'ZLZ88BR5NTk'
    },
    ],
    buildDrinkMenu: function () {
        let fragment = document.createDocumentFragment();

        this.drinkArray.forEach((drink) => {
            let labelNode = document.createElement('label');
            labelNode.setAttribute('for', drink.id);

            let radioNode = document.createElement('input');
            radioNode.id = drink.id;
            radioNode.name = 'drink';
            radioNode.setAttribute('type', 'radio');
            radioNode.setAttribute('value', drink.label);

            const textNode = document.createTextNode(drink.label);

            labelNode.appendChild(radioNode);
            labelNode.appendChild(textNode);

            fragment.appendChild(labelNode);
        });

        document.querySelector('.radio-group').appendChild(fragment);
    }
};

let numberOfDrinks = 0;

const submitOrder = function (name, drinkId) {
    numberOfDrinks++;

    if (numberOfDrinks < 5) {
        const drinkObject = menu.drinkArray.find((arrayElement => {
            return arrayElement.id === drinkId;
        }));

        fetchImage(drinkObject.photoId);

        let node = document.createElement('h3');
        const textNode = document.createTextNode(`${name} would like a ${drinkObject.label}`);
        node.appendChild(textNode);

        document.querySelector('.order-details').appendChild(node);
    } else {
        alert("Drink order queue is full. Please try ordering again in a few minutes.");
    }

    updateOrderCount(numberOfDrinks);
};

const updateOrderCount = (count) => {
    document.getElementById('drink-count').innerHTML = `Drinks Ordered: ${count}`;
};

const fetchImage = (photoId) => {
    const url = `https://source.unsplash.com/${photoId}/300x200`;

    fetch(url)
        .then((response) => { return response.blob(); })
        .then((blob) => {
            console.log(blob);
            const imgUrl = URL.createObjectURL(blob);
            document.getElementById('cocktail-image').src = imgUrl;
        })
        .catch((error) => { console.log(error); });
};

document.addEventListener("DOMContentLoaded", function (event) {

    menu.buildDrinkMenu();

    document.getElementById('order-btn').addEventListener('click', function () {
        const orderName = document.getElementById('order-form-input').value;
        const drinkId = document.querySelector('input[type="radio"]:checked').id;
        submitOrder(orderName, drinkId);
    });

    document.getElementById('order-btn').addEventListener('click', function () {
        console.log('second click handler');
    });
});
