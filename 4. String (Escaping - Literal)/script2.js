console.log("\n");
console.log("\n");
console.log("============Operasi String====================");
console.log("\n");
console.log("\n");
// Operasi String

console.log("----------------Menggunakan Operasi CharAt----------------");
// 1. Char At
let dataString = "wijaya";
let dataChar = dataString.charAt(0);
console.log(`Character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`Character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`Character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`Character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`Character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`Character pada index ke 0 = ${dataChar}`);

console.log("\n");
console.log("\n");
// 2.Menyambung String
console.log("----------------Menyambung String----------------");
console.log("\n");
let firstName = "Hendi";
let lastName = "Wijaya";

let fullName = firstName.concat(" ", lastName);
console.log(fullName);

//3. Mengambil Index Dari Karakter
console.log("\n");
console.log(
  "----------------Mengambil index dari  chararcter fullName----------------",
);
console.log(fullName.indexOf("w"));
console.log(fullName.indexOf("i"));
console.log(fullName.indexOf("j"));
console.log(fullName.indexOf("a"));
console.log(fullName.indexOf("y"));
console.log(fullName.indexOf("a"));

console.log("\n");
console.log("----------------Menggunakan Substring----------------");
// 4.Substring

console.log(fullName.substring(0, 8));
console.log(fullName.substring(9, 0));

console.log("\n");
console.log("----------------Menggunakan Slice----------------");
//5. Slice
console.log(fullName.slice(3, 9));
console.log(fullName.slice(9, 3)); // ketika nilai dibalik maka akan menghasilkan nilai kosong.

console.log("\n");
console.log("----------------Menggunakan Replace----------------");
//6. Riplace
namaBaru = fullName.replace("Hendi Wijaya", "Wijaya Kusuma");
console.log(namaBaru);
// perubahan dari nilai asli dirubah menjadi nilai baru

console.log("\n");
console.log("----------------Menggunakan toLower----------------");
//7. tolower
console.log(fullName.toLowerCase());

console.log("\n");
console.log("----------------Menggunakan toUpper----------------");
//8. tolower
console.log(fullName.toUpperCase());

console.log("\n");
console.log(
  "----------------Menggunakan Extra Data Number(Parsing Data)----------------",
);
//9. extra Data Number parsing data
let dataString2 = "125";
let dataInt = parseInt(dataString2);
console.log(dataInt);
console.log(typeof dataInt);

console.log("\n");
let dataString3 = "1.125";
let dataFlt = parseFloat(dataString3);
console.log(dataFlt);
console.log(typeof dataFlt);
