const searchInsert = function(nums, target) {
    let min = 0, max = nums.length, mid = null;
    while(max > min) {
        mid = Math.floor((max + min) / 2)
        if(nums[mid] === target) return mid
        if(nums[mid] > target) {
            max = mid - 1
        } else {
            min = mid + 1
        }
    } 
    return min
}

const  nums = [1,3,5,6], target = 2;
console.log(searchInsert(nums, target))
// Belgilangan butun sonlar qatori va maqsadli qiymatni hisobga olgan holda, agar maqsad topilsa, indeksni qaytaring. Agar yo'q bo'lsa, indeksni agar u tartibda joylashtirilgan bo'lsa, qaytaring.

// Siz bilan algoritm yozishingiz kerak O(log n) ish vaqtining murakkabligi.

 

// 1-misol:

// Kirish: raqamlar = [1,3,5,6], maqsad = 5
// Chiqish: 2
// 2-misol:

// Kirish: raqamlar = [1,3,5,6], maqsad = 2
// Chiqish: 1
// 3-misol:

// Kirish: raqamlar = [1,3,5,6], maqsad = 7
// Chiqish: 4
 

// Cheklovlar:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums o'z ichiga oladi aniq tartiblangan qiymatlar ko'tarilish buyurtma.
// -104 <= target <= 104