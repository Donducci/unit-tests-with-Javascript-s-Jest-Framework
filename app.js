// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))



// one euro is:
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }
// dollarToYen
const fromDollarToYen = (dollars) => {
    const yen = dollars * 134.96;
    return yen;
  }

// fromEuroToDollar
const fromEuroToDollar = (euros) => {
    const dollars = euros * 1.206
    return parseFloat(dollars.toFixed(1));
}

// fromYenToPound
const fromYenToPound = (yen) => {
    const pound = euro * 0.0062
    return pound;
}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { 
    sum: sum,
    fromDollarToYen: fromDollarToYen,
    fromEuroToDollar: fromEuroToDollar,
    fromYenToPound: fromYenToPound
 };