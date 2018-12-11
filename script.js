'use strict';
const cow = {
    message (text) {
        if (text === 'ololo') {
            throw new TypeError('ERROR baNaN');
        }
        return text;
    }
};

try {
    cow.moo();
} catch (e) {
    if (e.name === 'TypeError') {
        console.error(`такого метода нет`);
    }
}

try {
    cow.message('ololo');

} catch (e) {
    console.log('обрабатывается в catch');
    }



class Hamburger {

    constructor(...arg) {
        this.arg = arg;
    }

    static get SIZE_SMALL() {
        return {
            price:50,
            calories: 20
        };
    }

    static get SIZE_BIG() {
        return {
            price: 100,
            calories: 40
        };
    }
    static get STUFFING_CHEESE() {
        return {
            price: 10,
            calories: 20
        };
    }
    static get STUFFING_SALAT() {
        return {
            price: 5,
            calories: 10
        };
    }
    static get STUFFING_POTATOES() {
        return {
            price: 15,
            calories: 10
        };

    }
    static get TOPPING_SAUCE() {
        return {
            price: 15,
            calories: 0
        };
    }
    static get TOPPING_MAYO() {
        return {
            price: 20,
            calories: 5
        };

    }
    addTopping(addition) {
        this.arg.push(addition);
    }
     calculatePrice() {
        return this.arg.reduce((prev, elem) => {
            return prev += elem.price;
        },0);
    }
     calculateCalories() {
        return this.arg.reduce((prev, elem) => {
            return prev += elem.calories;
        },0);
    }
}
// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger( Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE );
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO );
// спросим сколько там калорий
console.log(`Calories: ${hamburger.calculateCalories()}`);
// сколько стоит
console.log(`Price: ${hamburger.calculatePrice()}`);
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);
