var missingNumber = function(nums) {
    if(nums.length === 1) {
        if(nums[0] === 1) {
            return 0
        } else {
            return 1
        }
    }
    let max = Math.max(...nums)
    let sum = (max * (max + 1)) / 2;
    let itemsSum = 0
    for(let i = 0; i < nums.length; i++) {
        itemsSum += nums[i]
    }

    if(sum > itemsSum) {
        return sum - itemsSum
    } else if(sum === itemsSum) {
        if(nums.includes(0)) {
            return max + 1
        } else {
            return 0
        }
        
    }
};

// const nums = [9,6,4,2,3,5,7,0,1]
const nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
console.log(missingNumber(nums))
console.log(nums.sort((a, b) => {return a -b}))
//! 0+1+2+3+4+5+6+7+8+9 = 45