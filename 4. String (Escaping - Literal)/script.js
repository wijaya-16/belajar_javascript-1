// 1. Escaping String (' | " | \ | \n | \r | \t | \b | \f)
// data1 =
//   "He Said: "if you want to success, remove your grativication mindset!! """; // ini akan errorr

data1 =
  'He Said: "if you want to success, remove your grativication mindset!! "'; // benar
console.log(data1);

//jika ingin tetap menggunakan petik dua dan bisa dianggap sebagai karakter, harus menggunakan slas(/)

data2 = 'He said: "Don\'t rush to be advanced, be solid the basic"';
console.log(data2);

// tab
let data3 = "\t Javasript is a modern web language!";
console.log(data3);

// enter
let data4 = "Javasript is a \n \t \t \t modern web language!";
console.log(data4);

// 2. Literal String( template literal string)
// let namaDepan = "Wijaya";
// let namaBelakang = "Kusuma";
// let umur = 20;
// let namaLengkap =
//   "Hallo, nama saya" +
//   " " +
//   namaDepan +
//   " " +
//   namaBelakang +
//   " " +
//   "Umur saya " +
//   umur;
// console.log(namaLengkap);
// console.log(typeof namaLengkap); // ini akan merubah tipe data yang aslinya, yang tadinya number menjadi string

// cara mengatasinya
// menggunakan string literal / template literal

let namaDepan = "Wijaya";
let namaBelakang = "Kusuma";
let umur = 20;
let namaLengkap = `Hallo, nama saya ${namaDepan} ${namaBelakang} umur saya adalah ${umur}`;
console.log(namaLengkap);
