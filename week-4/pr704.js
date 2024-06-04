const search = function(nums, target) {
    let low = 0, higth = nums.length - 1, mid = null;
    while(higth >= low) {
        mid = Math.floor((low + higth) / 2)

        if(nums[mid] === target) return mid

        if(nums[mid] > target)
            higth = mid - 1
        else 
            low = mid + 1     
    }
    return - 1
};

const nums = [-1,0,3,5,9,12], target = 2
console.log(search(nums, target))

/* 704-yil. Ikkilik qidiruv
Oson
Mavzular
Kompaniyalar
Bir qator butun sonlarni hisobga olgan holda nums ko'tarilish tartibida tartiblangan va butun son target, qidirish uchun funktsiya yozing target ichida nums. Agar target mavjud, keyin indeksini qaytaring. Aks holda, qaytib keling -1.

Siz bilan algoritm yozishingiz kerak O(log n) ish vaqtining murakkabligi.

 

1-misol:

Kirish: raqamlar = [-1,0,3,5,9,12], maqsad = 9
Chiqish: 4
Tushuntirish: 9 raqamlarda mavjud va uning indeksi 4 ga teng
2-misol:

Kirish: raqamlar = [-1,0,3,5,9,12], maqsad = 2
Chiqish: -1
Tushuntirish: 2 raqamlarda mavjud emas, shuning uchun qaytish -1 */