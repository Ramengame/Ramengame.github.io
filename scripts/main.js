var ramen = 0;
var totalRamen = 0;
var money = 0;
var totalMoney = 0;
var brainPower = 0;
    
var noMoney = "The store clerk looks at you incredously. You know you need money to get Ramen, Right?"

function getMoney(number){
      money = money + number;
      document.getElementById("money").innerHTML = money;
};

function buyRamenButton(){
    getRamen();
};
    
function getRamen(){
    var ramenCost = 0.5;
    if(money >= ramenCost){
      ramen = ramen + 1;
    	money = money - ramenCost;
      document.getElementById('ramen').innerHTML = ramen;
      document.getElementById('money').innerHTML = money;
      eatRamenText();
      ramenStats();
    } else {
    alert("The store clerk looks at you incredously. You know you need money to get Ramen, Right?");
    }
};

function samsRamen(){
    var samsCost = 8.28;
    if(money >= samsCost){
	ramen = ramen + 48;
	document.getElementById('ramen').innerHTML = ramen;
	document.getElementById('money').innerHTML = money;

function ramenStats(){
    totalRamen = totalRamen + 1;
    document.getElementById('totalRamen').innerHTML = totalRamen;
};
  
function eatRamen(){
    if(ramen >= 1){
    brainPower = brainPower + 1;
    ramen = ramen - 1;
    document.getElementById('brainPower').innerHTML = brainPower;
    document.getElementById('ramen').innerHTML = ramen;
    } else{
    alert("You can't eat any Ramen because you don't HAVE any Ramen. This is unacceptable >:(");
    }
};

function brainUpgrade(){
	if(brainPower = 1){
	alert("You train your cat to get you money. +0.5 money/sec");
	} else if(brainPower = 2){
	alert("You ask your roommates to look for money, but they take half :(. +0.25 money/sec");
	} else {
	alert("another bowl of yummy Ramen");
	};
};
	

window.setInterval(function(){
    
getMoney(brainPower/2);
	
}, 1000);
