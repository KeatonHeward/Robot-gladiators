
var playerName = window.prompt("What is your robot's name");
var playerMoney = 10;
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyName = "Derek";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt('Would you like to Fight or Skip this battle? Enter "FIGHT" or "SKIP" to chooose.');
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };


    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


    if (playerHealth <= 0) {
        window.alert(playerName +" has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    } else if (promtFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip tyhis fight. Goodbye!");
            playerMoney = playerMoney -2;
        }

        else {
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    };
};
fight();