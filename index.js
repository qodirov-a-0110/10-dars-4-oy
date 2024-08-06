
//  **Berilgan so‘zda a harfi nechta borligini aniqlovchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(arg) {
//     let res = 0;
//     for (const i of arg) {
//         if (i === 'a') {
//             res ++;
//         }
//     }
//     return res;
// }
// let res = test(str);
// console.log(res);


//  **Berilgan so‘zning oxirgi 3 harfini qaytaruvchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(arg) {
//     let res = arg.slice(-3);
//     return res
// }
// let res = test(str);
// console.log(res);


//  **Berilgan so‘zni teskari qilib qaytaruvchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(arg) {
//     return arg.split('').reverse().join(''); 
// }
// let res = test(str);
// console.log(res);


// **Berilgan so‘zda nechta belgi borligini aniqlovchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(str) {
//    let res = 0;
//    for (const i of str) {
//     res ++
//    }
//    return res
// }
// let res = test(str);
// console.log(res);


// **Berilgan so‘zni 3 marta takrorlab qaytaruvchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(str) {
//    let res = '';
//    let sikl = '123';
//    for (const i of sikl) {
//     res += str
//    }
//    return res
// }
// let res = test(str);
// console.log(res);


// **Berilgan so‘zdan faqat sonlarni olib qaytaruvchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(str) {
//     return str.replace(/\D/g, '');
// }
// let res = test(str);
// console.log(res);


/**Berilgan so‘zda ‘js’ so‘z birikmasi borligini tekshiruvchi funksiya yozing.**
// let str = prompt('soz kiritin');
// function test(str) {
//     return str.includes('js')
// }
// let res = test(str);
// console.log(res);

// =======MASSIVGA OID MASALARAR======


// **Berilgan massivdagi eng katta elementni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5,6,7,8,9];
// function test(arg) {
//     let max = [0];
//     for (const i of arg) {
//         if (i>max) {
//             max = i
//         }
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);


// **Berilgan massivdagi barcha juft sonlarni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5,6,7,8,9];
// function test(arg) {
//     let max = '';
//     for (const i of arg) {
//         if (i%2==0) {
//             max += i
//         }
        
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);

// **Berilgan massivdagi elementlarning yig‘indisini hisoblaydigan funksiya yozing.**
// let arr = [1,2,3,4,5,6,7,8,9];
// function test(arg) {
//     let max = 0;
//     for (const i of arg) {
//             max += i   
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);


// **Berilgan massivdagi har bir elementni 2 baravar oshiradigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
    // let res = arg.map(function(value) {
    //     return value * 2
    // })
    // return res
// }
// let res = test(arr);
// console.log(res);


**Berilgan massivdagi barcha manfiy sonlarni olib tashlaydigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,-5,7,8];
// function test(arg) {
//     let res = arg.filter(function(value) {
//         return value > 0
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);



// **Ikki massivni birlashtiradigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,5,24,47;
// let arr2 = [6,7,8,9,10];
// function test(arg,arg2) {
//     return arg.concat(arg2)
// }
// let res = test(arr,arr2);
// console.log(res);



// **Berilgan massivni teskari tartibda qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5,6,7,8];
// function test(arg) {
//     return arg.reverse()
// }
// let res = test(arr);
// console.log(res);




// **Berilgan massivdan faqat toq indeksli elementlarni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5,7,8,9];
// function test(arg) {
//     let res = arg.filter(function(value,i) {
//         return i % 2 == 1
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);



// **Berilgan massivdagi elementlarning o‘rtacha qiymatini hisoblaydigan funksiya yozing.**
// let arr = [1,2,3,4,5,6,7,8];
// function test(arg) {
//     let sum = 0
//     let count = 0
//     let res = 0
//     for (const i of arg) {
//         sum +=i;
//         count++;
//         res = sum/count
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);