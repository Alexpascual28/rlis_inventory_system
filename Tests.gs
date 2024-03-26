function getFirstDigit(threeDigitNumber) {
  // Convert the three-digit number to a string
  var numberString = threeDigitNumber.toString();

  // Extract the first digit as an integer
  var firstDigit = parseInt(numberString.charAt(0), 10);

  return firstDigit;
}

// Example usage:
// var threeDigitNumber = 6;
// var firstDigit = getFirstDigit(threeDigitNumber);
// console.log("First digit:", firstDigit);