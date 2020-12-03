var money = 0
var ramen = 0

function getRamen (){
    if (money >= 5.50) {
    ramen = ramen + 1;
    money = money - ramen;
    };
};

function getMoney(number) {
    money = money + 1;
};
