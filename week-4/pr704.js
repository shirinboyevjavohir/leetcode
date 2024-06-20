const search = function(nums, target) {
    let a = 0, b = nums.length - 1, c = null;
    while (b >= a) {
        c = Math.floor((a+b)/2)
        if(nums[c] === target) return c
        if(nums[c] > target) {
            b = c - 1
        } else {
            a = c + 1 
        }
    }
    return -1
}

const nums = [-1,0,3,5,9,12], target = 2;
console.log(search(nums, target))