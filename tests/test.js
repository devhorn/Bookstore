let testNumber = 17.2;

function convertPrice(price) {
  let priceAsString = String(price);
  if (priceAsString.includes(".")) {
    priceAsString = priceAsString.replace(".", ",");
    priceAsArr = priceAsString.split(",");
    let numAfterComma = Number(priceAsArr[1]);
    if (numAfterComma <= 9) {
      let resultPrice = priceAsArr.toString();
      resultPrice = resultPrice + 0;
      return resultPrice;
    }
    return priceAsString;
  } else {
    return priceAsString;
  }
}

let result = convertPrice(testNumber);

console.log(result);
