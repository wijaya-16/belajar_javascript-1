// 1. let
// variabel dengan let
let nama = "Hendi Wijaya";
let nim = "25SI025";
let prodi = "Sistem Informasi";

console.table("Nama   :", nama);
console.table("NIM    :", nim);
console.table("Prodi  :", prodi);

console.log("\n");
console.log("\n");
// variabel dengan var
// var namaDepan = "Selvina Zia";
// var namaBelakang = "Azizah";

// console.log("Nama Depan     : ", namaDepan);
// console.log("Nama Belakang  : ", namaBelakang);

console.log("\n");
// kelakuakuan dari variabel let
namaBelakang = "Dian Mauliana";
{
  let namaBelakang = "Prihantini";
  // console.log("Nama Belakang: ", namaBelakang); // ini akan mengambil yang ada di dalam scope
}
console.log("Nama Belakang: ", namaBelakang); // ini akan mengambil yang ada di luar scope

// kelakuan dari var
console.log("\n");
// namaBelakang = "Jayadi Budi";
{
  let namaBelakang = "Husaeni Akbar";
  console.log("Nama Belakang: ", namaBelakang); // ini akan mengambil yang ada di dalam scope
}
console.log("Nama Belakang: ", namaBelakang); // ini akan mengambil yang ada di luar scope

// =================//

// 2. var
console.log("\n");
var middleName = "wijaya";
{
  // var middleName = "SAY, Hello!";
  // console.log("Ini adalah Middle Name: ", middleName);
}
console.log("Ini adalah Middle Name paling luar: ", middleName); // akan mengambil data yang paling terbaru.

console.log("\n");
console.log("\n");
// kasus khusus tambahan
belajarProgramming = "Python";
{
  belajarProgramming = "Javascript";
}
console.log(belajarProgramming);
// dengan tanpa keyword seperti contoh studi kasus di atas, maka akan dianggap sebagai var

console.log("\n");

// 3. const
goal =
  "Saya Harus berubah dan fokus belajar... belajar... belajar.. dan belajar....";
const umur = 21;
// umur = 22; // tidak bisa menggantikan yang sudah fixed

console.log("Target kedepan, ketika saya", +umur + " tahun,", goal);

console.log("\n");
