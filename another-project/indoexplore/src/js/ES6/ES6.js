// Kata letkunci memungkinkan Anda mendeklarasikan variabel dengan cakupan blok.
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

// Kata constkunci memungkinkan Anda mendeklarasikan konstanta (variabel JavaScript dengan nilai konstan).
// Konstanta mirip dengan variabel let, kecuali nilainya tidak dapat diubah.
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

// Fungsi panah memungkinkan sintaksis singkat untuk menulis ekspresi fungsi.
// Anda tidak memerlukan functionkata kunci, returnkata kunci, dan tanda kurung kurawal .
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;

// Penugasan destrukturisasi memudahkan penetapan nilai array dan properti objek ke variabel.
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;

// Penugasan destrukturisasi memudahkan penetapan nilai array dan properti objek ke variabel.
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;

// Operator ...menyebarkan suatu iterable (seperti array) ke dalam elemen-elemen individual.
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
// Operator ini ...dapat digunakan untuk menggabungkan array:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
// Pernyataan JavaScript for/ofmengulang nilai-nilai objek yang dapat diulang.
// for/ofmemungkinkan Anda melakukan pengulangan pada struktur data yang dapat diulang seperti Array, String, Maps, NodeList, dan lainnya.
// Perulangan ini for/ofmemiliki sintaks berikut:

// variabel - Untuk setiap iterasi, nilai properti berikutnya ditetapkan ke variabel. Variabel dapat dideklarasikan dengan const, let, atau var.
// dapat diulang - Objek yang memiliki properti yang dapat diulang.
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

// Melakukan Looping pada String
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}

// Maps js

