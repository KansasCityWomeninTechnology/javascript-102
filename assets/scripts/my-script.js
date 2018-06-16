const menu = {
    drinkArray: [{
            'id': 'focusedLady',
            'label': 'Focused Lady'
        },
        {
            'id': 'strongLady',
            'label': 'Strong Lady'
        },
        {
            'id': 'frontEndPunch',
            'label': 'Front-End Punch'
        },
        {
            'id': 'cachedOut',
            'label': 'Cached Out'
        },
        {
            'id': 'httPapaya',
            'label': 'httPAPAYA://'
        },
        {
            'id': 'nerdyDaiquiri',
            'label': 'Nerdy Daiquiri'
        },
        {
            'id': 'theAvernaCode',
            'label': 'The Averna Code'
        },
        {
            'id': 'focusedTheMostest',
            'label': 'Focused the Mostest'
        },
    ],
    buildDrinkMenu: function(){
      let fragment = document.createDocumentFragment();
   
      this.drinkArray.forEach( (drink) => {
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
   
       menu.buildDrinkMenu();
   
       document.getElementById('order-btn').addEventListener('click', function () {
         const orderName = document.getElementById('order-form-input').value;
         const drinkName = document.querySelector('input[type="radio"]:checked').value;
         submitOrder(orderName, drinkName);
       });
   
       document.getElementById('order-btn').addEventListener('click', function () {
         console.log('second click handler');
       });
   });
   