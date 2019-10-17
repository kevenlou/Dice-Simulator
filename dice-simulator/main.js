// Dice Simulator

// Event Listener
document.getElementById('play-btn').addEventListener('click', playGame);
document.getElementById('purchase-btn').addEventListener('click', luxury);

// Global variable
let totalfunds = 5000;
let houseValue = 0;
let playerValue = 0;
let houseValue2 = 0;
let playerValue2 = 0;

// Event function
function playGame(){

    // House dice
    let house = Math.random() * 100;
    if (house < 16.7){
        document.getElementById('house-die').src = "images/1.png";
        houseValue = 1;
    } else if (house < 33.4){
        document.getElementById('house-die').src = "images/2.png";
        houseValue = 2;
    } else if (house < 50.1){
        document.getElementById('house-die').src = "images/3.png";
        houseValue = 3;
    } else if (house < 66.8){
        document.getElementById('house-die').src = "images/4.png";
        houseValue = 4;
    } else if (house < 83.5){
        document.getElementById('house-die').src = "images/5.png";
        houseValue = 5;
    } else {
        document.getElementById('house-die').src = "images/6.png";
        houseValue = 6;
    }

    // House dice 2
    let house2 = Math.random() * 100;
    if (house2 < 16.7){
        document.getElementById('house-die2').src = "images/1.png";
        houseValue2 = 1;
    } else if (house2 < 33.4){
        document.getElementById('house-die2').src = "images/2.png";
        houseValue2 = 2;
    } else if (house2 < 50.1){
        document.getElementById('house-die2').src = "images/3.png";
        houseValue2 = 3;
    } else if (house2 < 66.8){
        document.getElementById('house-die2').src = "images/4.png";
        houseValue2 = 4;
    } else if (house2 < 83.5){
        document.getElementById('house-die2').src = "images/5.png";
        houseValue2 = 5;
    } else {
        document.getElementById('house-die2').src = "images/6.png";
        houseValue2 = 6;
    }

    // Player dice
    let player = Math.random() * 100;
    if (player < 16.7){
        document.getElementById('player-die').src = "images/1.png";
        playerValue = 1;
    } else if (player < 33.4){
        document.getElementById('player-die').src = "images/2.png";
        playerValue = 2;
    } else if (player < 50.1){
        document.getElementById('player-die').src = "images/3.png";
        playerValue = 3;
    } else if (player < 66.8){
        document.getElementById('player-die').src = "images/4.png";
        playerValue = 4;
    } else if (player < 83.5){
        document.getElementById('player-die').src =  "images/5.png";
        playerValue = 5;
    } else {
        document.getElementById('player-die').src = "images/6.png";
        playerValue = 6;
    }

    // Player dice 2
    let player2 = Math.random() * 100;
    if (player2 < 16.7){
        document.getElementById('player-die2').src = "images/1.png";
        playerValue2 = 1;
    } else if (player2 < 33.4){
        document.getElementById('player-die2').src = "images/2.png";
        playerValue2 = 2;
    } else if (player2 < 50.1){
        document.getElementById('player-die2').src = "images/3.png";
        playerValue2 = 3;
    } else if (player2 < 66.8){
        document.getElementById('player-die2').src = "images/4.png";
        playerValue2 = 4;
    } else if (player2 < 83.5){
        document.getElementById('player-die2').src = "images/5.png";
        playerValue2 = 5;
    } else {
        document.getElementById('player-die2').src = "images/6.png";
        playerValue2 = 6;
    }

    
    // funds
    let playerBets = Number(document.getElementById('bet-input').value);
    let playerFunds = totalfunds;

    let playerDiceTotal = playerValue + playerValue2;
    let houseDiceTotal = houseValue + houseValue2;

    // Preventing funds to go to negative and bid amount
    if(playerBets <= playerFunds){
        // Adding funds
        if (playerDiceTotal > houseDiceTotal){
            totalfunds = playerBets + playerFunds;
            document.getElementById('funds').innerHTML = totalfunds;
        // Subtracting funds 
        } else if (houseDiceTotal > playerDiceTotal) {
            totalfunds = playerFunds - playerBets;
            document.getElementById('funds').innerHTML = totalfunds;
        }
    } else {
        alert("Helping you not get bankrup.")
    }
}

function luxury(){

    // Funds under 1000
    if(totalfunds <= 1000){
        document.getElementById('loot').innerHTML += '<img src = "images/socks.png">';
    }

    let reward =  Math.random() * 100;

    // Funds between 1000 to 5000
    if(totalfunds >= 1000 && totalfunds <= 5000){
        if (reward < 33){
            document.getElementById('loot').innerHTML += '<img src = "images/ring.png">';
            totalfunds = totalfunds - 1000;
            document.getElementById('funds').innerHTML = totalfunds;
        } else if (reward < 66){
            document.getElementById('loot').innerHTML += '<img src = "images/trip.jpg">';
            totalfunds = totalfunds - 1000;
            document.getElementById('funds').innerHTML = totalfunds;
        }else {
            document.getElementById('loot').innerHTML += '<img src = "images/bike.jpg">';
            totalfunds = totalfunds - 1000;
            document.getElementById('funds').innerHTML = totalfunds;
        }
    }

    // Funds over 5000
    if (totalfunds > 5000){
        if (reward < 25){
            document.getElementById('loot').innerHTML += '<img src = "images/motorcycle.jpg">';
            totalfunds = totalfunds - 5000;
            document.getElementById('funds').innerHTML = totalfunds;
        } else if (reward < 50){
            document.getElementById('loot').innerHTML += '<img src = "images/house.png">';
            totalfunds = totalfunds - 5000;
            document.getElementById('funds').innerHTML = totalfunds;
        }else if (reward < 75){
            document.getElementById('loot').innerHTML += '<img src = "images/boat.png">';
            totalfunds = totalfunds - 5000;
            document.getElementById('funds').innerHTML = totalfunds;
        } else {
            document.getElementById('loot').innerHTML += '<img src = "images/car.png">';
            totalfunds = totalfunds - 5000;
            document.getElementById('funds').innerHTML = totalfunds;
        }
    }
}
