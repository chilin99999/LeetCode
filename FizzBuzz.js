// #412 Fizz Buzz - Easy

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var output = [];
    var temp,flag;
    
    for(var i=1; i<=n; i++) {
        temp = "", flag = false;
        if(i%3 === 0) {
            temp += "Fizz";
            flag = true;
        }
        if(i%5 === 0)
        {
            temp += "Buzz";
            flag = true;
        }
        if(flag === false)
            temp += i;
        output.push(temp);
    }
    return output;
};
