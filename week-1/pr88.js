var merge = function (nums1, m, nums2, n) {
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[--m];
    } else {
      nums1[m + n - 1] = nums2[--n];
    }
  }
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge(nums1, m, nums2, n));

// Sizga kamaymaydigan tartibda tartiblangan ikkita butun sonli massiv nums1va mos ravishda va ichidagi elementlar sonini ifodalovchi ikkita tamsayı va berilgan .nums2mnnums1nums2

// Birlashtirish nums1 va kamaymaydigan tartibdanums2 tartiblangan bitta massivga .

// Yakuniy tartiblangan massiv funktsiya tomonidan qaytarilmasligi kerak, balki uning o'rniga massiv ichida saqlanishinums1 kerak . Bunga moslashish uchun nums1uzunligi ga ega m + n, bu erda birinchi melementlar birlashtirilishi kerak bo'lgan elementlarni bildiradi, oxirgi nelementlar esa o'rnatiladi 0va e'tiborga olinmasligi kerak. nums2uzunligiga ega n.

// 1-misol:

// Kirish: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//  Chiqish: [1,2,2,3,5,6]
//  Izoh: Biz birlashtirayotgan massivlar [1,2,3] va [2,5,6].
// Birlashtirish natijasi [ 1 , 2 ,2, 3 ,5,6] bo'lib, tagiga chizilgan elementlar raqamlar1 dan keladi.
// 2-misol:

// Kirish: nums1 = [1], m = 1, nums2 = [], n = 0
//  Chiqish: [1]
//  Izoh: Biz birlashtirayotgan massivlar [1] va [].
// Birlashtirish natijasi [1].
// 3-misol:

// Kirish: nums1 = [0], m = 0, nums2 = [1], n = 1
//  Chiqish: [1]
//  Izoh: Biz birlashtirayotgan massivlar [] va [1].
// Birlashtirish natijasi [1].
// E'tibor bering, m = 0 bo'lgani uchun nums1 da hech qanday element yo'q. 0 faqat birlashma natijasi nums1 ga mos kelishini ta'minlash uchun mavjud.
