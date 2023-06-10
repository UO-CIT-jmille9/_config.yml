function valueFromArray(arr) {
    return arr.reduce(
        (acc, val) =>
        Array.isArray(val) ? valueFromArray(val) : acc + valueFromCoinObject(val),
        0
    );
}

// Return coin values from object

function valueFromCoinObject(object) {
    const { denom = 0, count = 0 } = object;
    return validDomination(denom) ? denom * count : 0;
}

// Validate coin donomination, note using type equality instead of test
function validDomination(coin) {
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

// Process coin objects, either as a single coin object, or array of coin objects
function coinCount(...coinage) {
    return valueFromArray(coinage);
  }
  
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));