function triangleMaker(triLen) {
    var str = "#";
    for(var i = 1; i <= triLen; i++) {
        console.log(str);
        str = str.concat("#");
    }
}

// triangleMaker(7)

function fizzBuzz() {
    var num = 1
    for(var i = 1; i < 101; i++) {
        if(num % 15 == 0) {
            console.log("FizzBuzz");
        } else if(num % 5 == 0) {
            console.log("Buzz");
        } else if(num % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(num)
        }

        num++;
    }
}

// fizzBuzz()


function chessBoardMaker(size) {
    for(var i = 0; i < size; i++){

        if(i % 2 == 0) {
            var start = "X";
            var second = "O";
        } else {
            var start = "X";
            var second = "O";
        }

        var str = "";

        for(var j = 0; j < size; j++){

            if(j % 2 == 0) {
                str = str.concat(start);
            } else {
                str = str.concat(second);
            }
        }
        console.log(str + "\n");
    }
}

// chessBoardMaker(16)
