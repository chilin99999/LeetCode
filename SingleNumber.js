// #136 Single Number - Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var storage = [];
    nums.forEach(function(d) {
        var index = storage.indexOf(d);
        if(index === -1) {
            storage.push(d);
        }
        else {
            storage.splice(index, 1);
        }
    })
    return storage[0];
};
