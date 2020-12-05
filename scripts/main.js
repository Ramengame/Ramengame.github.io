var currentRamen = 0;
var totalRamen = 0;
var currentMoney = 0;
var totalMoney = 0;
var brainPower = 0;
var regularRamenCost = 0.5;
var ramensFromRegularStore = 1;
var samsRamenCost = 8.28;
var ramensFromSam = 48;
var currentBowl = 0;
var bowlCost = 20;

//number updating
function updateCurrentRamenHTML(){
    document.getElementById('ramen').innerHTML = currentRamen.toFixed(2);
};

function updateCurrentMoneyHTML(){
    document.getElementById('money').innerHTML = currentMoney.toFixed(2);
};

function updateCurrentBowlHTML(){
    document.getElementById('bowl').innerHTML = currentBowl;
};

function updateTotalRamenHTML(){
    document.getElementById('totalRamen').innerHTML = totalRamen;
};

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
     alert("You need some Money! :( To bad your broke.")
    }
};

function buyBowl(){
    if(currentMoney >= bowlCost){
	    currentBowl++;
	    currentMoney -= bowlCost;
	    updateCurrentBowlHTML();
        updateCurrentMoneyHTML();
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
        brainPower = brainPower + (1 + currentBowl);
        currentRamen -= 1;
        document.getElementById('brainPower').innerHTML = brainPower;
        updateCurrentRamenHTML();
    } else{
        alert("You can't eat any Ramen because you don't HAVE any Ramen. This is unacceptable >:(");
    }
}

//Updates Modal Stuff
var updatesModal = document.getElementById("updatesModalGeneral");
var updatesModalButton = document.getElementById("updatesModalButton");
var updatesModalSpan = document.getElementsByClassName("closeUpdatesModal")[0];

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

//Tick settings
window.setInterval(function(){ getMoney(brainPower/2); }, 1000);
