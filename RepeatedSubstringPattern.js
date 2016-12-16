// #459 Repeated Substring Pattern - Easy

/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
    for(var i=1, len=str.length; i<=len/2; i++)
    {
        if(len % i === 0) {
            var substr = str.substring(0, i);
            var temp = str;
            while(temp.length >= 0)
            {
                if(temp.length === 0) return true;
                if(temp.indexOf(substr) === 0)
                {
                    temp = temp.substring(i);
                    continue;
                }
                break;
            }
        }
    }
    return false;
};
