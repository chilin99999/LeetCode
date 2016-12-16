// 344 Reverse String - Easy

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var output = '';
  for (var i = s.length - 1; i >= 0; i--)
    output += s[i];
  return output;
};
