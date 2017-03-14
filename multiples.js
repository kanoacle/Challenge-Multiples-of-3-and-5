/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  for (var x = 0; x < n; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }

  return sum;
};