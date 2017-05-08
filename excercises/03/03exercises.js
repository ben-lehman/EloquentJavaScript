function min(a, b) {
    var minimum = a;
    if (a > b) {
        minimum = b;
    }

    return minimum;
}

// console.log(min(0, -3))


function isEven(n) {
    if (n == 0) {
        return true;
    } else if(n == 1) {
        return false;
    } else {
        n -= 2;
        return isEven(n);
    }
}

// console.log(isEven(74))

function countBs(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "B") {
            count++;
        }
    }

    return count;
}

// console.log(countBs("BBSB"))

function countChar(str, letter) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count++;
        }
    }

    return count;
}

console.log(countChar("kakkerlak", "k"))
