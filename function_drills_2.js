
'use strict';

function jediName(firstName, lastName) {
    const last = lastName.slice(0,3);
    const first = firstName.slice(0,2);

    return `${last}${first}`;
}

function beyond(num) {
    if (num === Infinity){
        console.log("and Beyond");
    }
    else if (num > 0 && num !== Infinity) {
        console.log("To infinity");
    }
    else if (num < 0) {
        console.log("to negative infinity");
    }
    else {
        console.log("staying home");
    }
}

function decode(word) {
    let arr = [];
    let wordArray = word.split(" ");
    
    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i][0] === 'a'){
            arr.push(wordArray[i][1]);
        }
        else if (wordArray[i][0] === 'b'){
            arr.push(wordArray[i][2]);
        }
        else if (wordArray[i][0] === 'c'){
            arr.push(wordArray[i][3]);
        }
        else if (wordArray[i][0] === 'd'){
            arr.push(wordArray[i][4]);
        }
        else {
            arr.push(" ");
        }
    }
    return arr;
}

console.log(decode('craft block argon meter bells brown croon droop'));


function daysInAMonth(month, leapYear) {
    let expr = month;
    switch (expr) {
        case "January":
            return "January has 31 days";
            
        case "February":
            if (leapYear === true ) {
                return "February has 29 days";
            } else {
                return "February has 28 days";
            }
        case "March":
            return "March has 31 days";
        case "April":
            return "April has 30 days";
        case "May":
            return "May has 31 days";
        case "June":
            return "June has 30 days";
        case "July":
            return "July has 31 days";
        case "August":
            return "August has 31 days";
        case "September":
            return "September has 30 days";
        case "October":
            return "October has 31 days";
        case "November":
            return "November has 30 days";
        case "December":
            return "December has 31 days";
        default:
            throw new Error ("Must provide a valid month");
    }
}

console.log(daysInAMonth("March"));
console.log(daysInAMonth("February", true));
console.log(daysInAMonth("fjeiwjg"));

let playerScore = 0;
let computerScore = 0;


function game(num) {
    


    const computer = Math.floor(Math.random() * 3) + 1;

    if (num === 1 && computer === 2) {
        computerScore++;
    }
    else if (num === 1 && computer === 3)  {
        playerScore++;
    }
    else if (num === 2 && computer === 3) {
        computerScore++;
    }
    else if (num === 2 && computer === 1)  {
        playerScore++;
    }
    else if (num === 3 && computer === 1) {
        computerScore++;
    }
    else if (num === 3 && computer === 2)  {
        playerScore++
    }
    else {
        return "Tie!";
    }

return `Player score: ${playerScore} Computer score:${computerScore}`;
}

console.log(game(2));
console.log(game(2));
console.log(game(1));