function flatten(arr) {
    arr.reduce(
        function(a,b) {
            var test = a.concat(b);
            console.log(test)
            return test;
        }, []);
}

// console.log(flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

/** MOTHER DAUGHTER AGE DIFFERENCE */

var an = require('./ancestory.js');
console.log(an.ANCESTRY_FILE);
