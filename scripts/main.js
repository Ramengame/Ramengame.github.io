var currentRamen = 0;
var totalRamen = 0;
var currentMoney = 0;
var totalMoney = 0;
var brainPower = 0;
var regularRamenCost = 0.5;
var ramensFromRegularStore = 1;
var samsRamenCost = 8.28;
var ramensFromSam = 48;
    
function getMoney(amount){
      currentMoney += amount;
      document.getElementById("money").innerHTML = currentMoney;
};

function buyRamenButton(){
    getRamen();
};
function samsRamen(){
    if(currentMoney >= samsRamenCost){
        paysForRamen(samsRamenCost, ramensFromSam);
    } else {
	    alert(noMoney);
    };
};

function getRamen(){
    var ramenCost = 0.5;
    if(currentMoney >= ramenCost){
        paysForRamen(regularRamenCost, ramensFromRegularStore);
    } else {
    alert("The store clerk looks at you incredously. You know you need money to get Ramen, Right?");
    }
};

function paysForRamen(ramenCost, totalRamenToReceive){
    currentRamen += totalRamenToReceive;
    currentMoney -= ramenCost;
    document.getElementById('ramen').innerHTML = currentRamen;
    document.getElementById('money').innerHTML = currentMoney;
}

function ramenStats(){
    totalRamen = totalRamen + 1;
    document.getElementById('totalRamen').innerHTML = totalRamen;
};
  
function eatRamen(){
    if(currentRamen >= 1){
        brainPower = brainPower + 1;
        currentRamen -= 1;
        document.getElementById('brainPower').innerHTML = brainPower;
        document.getElementById('ramen').innerHTML = currentRamen;
    } else{
        alert("You can't eat any Ramen because you don't HAVE any Ramen. This is unacceptable >:(");
    }
};

window.setInterval(function(){ getMoney(brainPower/2); }, 1000);
