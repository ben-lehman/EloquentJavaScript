/** SUM IN RANGE */

function myRange(start, end) {
    r = [];
    for(var i = start; i <= end; i++) {
        r = r.concat(i);
    }
    return r;
}

function mySum(arr) {
    sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// console.log(mySum(myRange(1,10)))


/** REVERSE ARRAY */

function reverseArray(arr) {
    newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr = newArr.concat(arr[i])
    }

    return newArr
}


function reverseInPlace(arr) {
    loopLimit = Math.floor(arr.length / 2);
    for (var i = 0; i < loopLimit; i++) {
         temp = arr[arr.length - i - 1];
         arr[arr.length - i - 1] = arr[i];
         arr[i] = temp;
    }

    return arr;
}

// console.log(reverseArray(["A", "B", "C"]))
// console.log(reverseInPlace([1, 2, 3, 4, 5]))


/** MAKING A LIST */

function arrayToList(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        var list = {value: arr[i], rest: list}
        }
    return list
}

function listToArray(list) {
    arr = []
    for (var node = list; node; node = node.rest) {
        arr = arr.concat(node.value)
    }
    return arr
}

// console.log(arrayToList([1,2,3]))
// console.log(listToArray(arrayToList([1,2,3])))

function prepend(list, el) {
    list = {value: el, rest: list}
    return list
}


function nth(list, n) {
    limit = 1
    for (var node = list; node; node = node.rest) {
        if (limit == n) {
            return node.value
        }
        limit++
    }

    return undefined
}


// console.log(nth(arrayToList([1,2,3,4]), 3))
// console.log(prepend(arrayToList([1,2,3]), 0))

