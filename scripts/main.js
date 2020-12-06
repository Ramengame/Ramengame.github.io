// Ramen Var
var currentRamen = 0;
var totalRamen = 0;
var regularRamenCost = 0.5;
var ramensFromRegularStore = 1;
var samsRamenCost = 8.28;
var ramensFromSam = 48;
// Money Var
var currentMoney = 0;
var totalMoney = 0;
// Brain Power Var
var currentBrainPower = 0;
var totalBrainPower = 0;
// Bowl Var
var currentBowl = 0;
var bowlCost = 20;
// Coupon Var
var currentCoupon = 0;
// Updates Button Var
var updatesModal = document.getElementById("updatesModalGeneral");
var updatesModalButton = document.getElementById("updatesModalButton");
var updatesModalSpan = document.getElementsByClassName("closeUpdatesModal")[0];

//number updating
function updateCurrentRamenHTML(){
    document.getElementById('ramen').innerHTML = currentRamen.toFixed(2);
};

function updateCurrentMoneyHTML(){
    document.getElementById('money').innerHTML = currentMoney.toFixed(2);
};

function updateCurrentBowlHTML(){
    document.getElementById('bowl').innerHTMl = currentBowl.toFixed(2);
};

function updateTotalRamenHTML(){
    document.getElementById('totalRamen').innerHTML = totalRamen;
}

function updateCurrentCouponHTML(){
    document.getElementById('coupon').innerHTML = currentCoupon;
}

function updateCurrentBrainPowerHTML(){
    document.getElementById('brainPower').innerHTML = currentBrainPower;
}

//buying and getting buttons
function getMoney(amount){
      currentMoney += amount;
      updateCurrentMoneyHTML();
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
        var x = document.getElementById("alertsNoMoney");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("alertsNoMoney", ""); }, 3000);
    }
};

function buyBowl(){
    if(currentMoney >= bowlCost){
	currentBowl += 1;
	currentMoney -= bowlCost;
	updateCurrentBowlHTML();
    updateCurrentMoney();
    } else{
	alert("The store clerk is really tired of you trying to buy things without money. No, you can't pay in Ramen.");
    }
};	

function paysForRamen(ramenCost, totalRamenToReceive){
    currentRamen += totalRamenToReceive;
    currentMoney -= ramenCost;
    totalRamen += totalRamenToReceive;
    updateCurrentMoneyHTML();
    updateCurrentRamenHTML();
    updateTotalRamenHTML();
}

function ramenStats(){
    totalRamen = totalRamen + 1;
    document.getElementById('totalRamen').innerHTML = totalRamen;
};
  
function eatRamen(){
    if(currentRamen >= 1){
        currentBrainPower = currentBrainPower + (1 + currentBowl);
        currentRamen -= 1;
        updateCurrentBrainPowerHTML();
        updateCurrentRamenHTML();
    } else{
        alert("You can't eat any Ramen because you don't HAVE any Ramen. This is unacceptable >:(");
    }
}

//Updates Modal Stuff
updatesModalButton.onclick = function() {
  updatesModal.style.display = "block";
}

updatesModalSpan.onclick = function() {
  updatesModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == updatesModal) {
    updatesModal.style.display = "none";
  }
}

////////////////////////////////////////

function clipCoupon(){
  if(currentBrainPower >= 100){
    currentCoupon += 1;
    totalBrainPower += 1;
    currentBrainPower -= 100;
    updateCurrentBrainPowerHTML();
    updateCurrentCouponHTML();
  };
}

///////////////////////////////////////
window.setInterval(function(){
    
getMoney((totalBrainPower/10)+1);
	
}, 1000);






