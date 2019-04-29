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