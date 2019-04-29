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

