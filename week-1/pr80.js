/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let countElement = (k = 1);

  if (nums.length < 3) {
    return nums;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      if (countElement < 2) {
        k += 1;
        countElement += 1;
      } else {
        nums[k] = nums[i + 1];
      }
    } else {
      countElement = 1;
      k += 1;
    }
  }

  console.log(k, nums);
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);

// Kamaymaslik tartibidanums tartiblangan butun sonli massivni hisobga olsak , har bir noyob element ko'pi bilan ikki marta paydo bo'lishi uchun ba'zi dublikatlarni joyida olib tashlang . Elementlarning nisbiy tartibi bir xil bo'lishi kerak .

// Ba'zi tillarda massiv uzunligini o'zgartirishning iloji bo'lmagani uchun natijani massivning birinchi qismiga joylashtirishingiz kerak nums. Rasmiy ravishda, agar kdublikatlarni olib tashlaganingizdan so'ng elementlar mavjud bo'lsa , unda birinchi kelementlar nums yakuniy natijani ushlab turishi kerak. Birinchi elementlardan keyin nima qoldirganingiz muhim emas  k .

// kYakuniy natijani birinchi ko'ringa qo'ygandan keyin qayting nums.

// Boshqa massiv uchun qo'shimcha joy ajratmang . Buni kiritish massivini O (1) qo'shimcha xotira bilan joyida o'zgartirish orqali qilishingiz kerak .

// Maxsus hakam:

// Sudya sizning yechimingizni quyidagi kod bilan sinab ko'radi:

// int[] nums = [...]; // Kirish massivi
// int[] waitNums = [...]; // To'g'ri uzunlikdagi kutilgan javob

// int k = olib tashlashDuplicates(raqamlar); // Amalga oshirishni chaqiradi

// assert k == expectNums.length;
// uchun (int i = 0; i < k; i++) {
//     assert raqamlar[i] == kutilayotganNums[i];
// }
// Agar barcha tasdiqlar o'tib ketsa, sizning yechimingiz qabul qilinadi .

// 1-misol:

// Kirish: nums = [1,1,1,2,2,3]
//  Chiqish: 5, nums = [1,1,2,2,3,_]
//  Izoh: Sizning funktsiyangiz birinchi beshtasi bilan k = 5 ni qaytarishi kerak. sonlarning elementlari mos ravishda 1, 1, 2, 2 va 3.
// Qaytarilgan k dan keyin nima qoldirganingiz muhim emas (shuning uchun ular pastki chiziq).
// 2-misol:

// Kirish: raqamlar = [0,0,1,1,1,1,2,3,3]
//  Chiqish: 7, raqamlar = [0,0,1,1,2,3,3,_,_]
//  Izoh: Sizning funktsiyangiz k = 7 ni qaytarishi kerak, raqamlarning birinchi yetti elementi mos ravishda 0, 0, 1, 1, 2, 3 va 3.
// Qaytarilgan k dan keyin nima qoldirganingiz muhim emas (shuning uchun ular pastki chiziq).
