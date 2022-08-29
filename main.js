






//   1- Using Constructor functions
function person(fullname, money, sleepmood, healthRate) {
    this.fullname = fullname
    this.money = money
    this.sleepmood = sleepmood
    this.healthRate = healthRate


    //methods
    this.sleep = function (hours) {
        if (parseInt(hours) == 7)
            return this.sleepmood = "happy"

        else if (parseInt(hours) <= 7)
            return this.sleepmood = "Tired"

        else if (parseInt(hours) >= 7)
            return this.sleepmood = "lazy"
    }

    this.eat = function (meals) {
        if (parseInt(meals) == 3)
            return this.healthRate = "100%"
        else if (parseInt(meals) == 2)
            return this.healthRate = "75%"
        else if (parseInt(meals) == 1)
            return this.healthRate = "50%"
    }

    this.buy = function (items) {
        if (parseInt(items) == 1)
            return parseInt(this.money) - parseInt(10);
    }

}
console.log("1)Using Constructor functions");
const human = new person('hagargad', '100', '5', '3');
console.log(human.fullname);
console.log(human.money);
console.log(human.sleepmood);
console.log(human.healthRate);
console.log(human.eat(2));
console.log(human.buy(1));
console.log(human.sleep(5));
//********************************************************************** */

//   2- Using Classes
class personc {
    constructor(fullname, money, sleepmood, healthRate) {
        this.fullname = fullname
        this.money = money
        this.sleepmood = sleepmood
        this.healthRate = healthRate


        //methods
        this.sleep = function (hours) {
            if (parseInt(hours) == 7)
                return this.sleepmood = "happy"

            else if (parseInt(hours) <= 7)
                return this.sleepmood = "Tired"

            else if (parseInt(hours) >= 7)
                return this.sleepmood = "lazy"
        }

        this.eat = function (meals) {
            if (parseInt(meals) == 3)
                return this.healthRate = "100%"
            else if (parseInt(meals) == 2)
                return this.healthRate = "75%"
            else if (parseInt(meals) == 1)
                return this.healthRate = "50%"
        }

        this.buy = function (items) {
            if (parseInt(items) == 1)
                return parseInt(this.money) - parseInt(10);
        }

    }


}
console.log("2)Using Classes");
const humanc = new personc('hagargad', '100', '6', '2');
console.log(humanc.fullname);
console.log(humanc.money);
console.log(humanc.sleepmood);
console.log(humanc.healthRate);
console.log(humanc.eat(3));
console.log(humanc.buy(1));
console.log(humanc.sleep(6));


//********************************************************************** */

//   3- Using Objects Linking to Other Objects (OLOO)
const persono = {
    init(fullname, money, sleepmood, healthRate) {
        this.fullname = fullname
        this.money = money
        this.sleepmood = sleepmood
        this.healthRate = healthRate

        //methods

        this.sleep = function (hours) {
            if (parseInt(hours) == 7)
                return persono.sleepmood = "happy"

            else if (parseInt(hours) <= 7)
                return persono.sleepmood = "Tired"

            else if (parseInt(hours) >= 7)
                return persono.sleepmood = "lazy"
        }

        this.eat = function (meals) {
            if (parseInt(meals) == 3)
                return persono.healthRate = "100%"
            else if (parseInt(meals) == 2)
                return persono.healthRate = "75%"
            else if (parseInt(meals) == 1)
                return persono.healthRate = "50%"
        }

        this.buy = function (items) {
            if (parseInt(items) == 1)
                return parseInt(this.money) - parseInt(10);
        }

    }
}
console.log("3)Using Objects Linking to Other Objects (OLOO)");
const humano = Object.create(persono);
humano.init('hagargad', '100', '6', '2');
console.log(humano.fullname);
console.log(humano.money);
console.log(humano.sleepmood);
console.log(humano.healthRate);
console.log(humano.eat(3));
console.log(humano.buy(1));
console.log(humano.sleep(6));

// ********************************************************************** */

//   4- Using Factory functions

function personf(fullname, money, sleepmood, healthRate) {
    return { fullname, money, sleepmood, healthRate ,
        sleep(hours) {

            if (parseInt(hours) == 7)
                return "happy"
        
            else if (parseInt(hours) <= 7)
                return "Tired"
        
            else if (parseInt(hours) >= 7)
                return "lazy"
        },
        eat(meals) {
            if (parseInt(meals) == 3)
                return "100%"
            else if (parseInt(meals) == 2)
                return "75%"
            else if (parseInt(meals) == 1)
                return "50%"
        },buy(items) {
            if (parseInt(items) == 1)
                return this.money - parseInt(10);
        }
    
    }

}


console.log("4)Using Factory functions");
const humanf = personf('hagargad', '100', '6', '2');
console.log(humanf);
console.log(humanf.eat(2));
// console.log(humanf.fullname);
// console.log(humanf.money);
// console.log(humanf.sleepmood);
// console.log(humanf.healthRate);
// console.log(personf.sleep(6));
// console.log(buy(1));
// console.log(eat(3));
//********************************************************************** */

