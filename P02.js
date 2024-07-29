// Bir satırlık yorum

/*
    Javascriptte değişkenler var, let yada const ile tanımlanır
    var ile let içine atanan değerler değiştirilebilir (mutable)
    fakat const ile oluşturulan variable'lar değiştirilemez (immutable)
*/

var firstName = "John";
let lastName = 'Doe';
var age = 43

console.log(firstName) // John
console.log(age) // 43

var isMarried = false
console.log(isMarried) // false

const pi = 3.14;
const gravity = 9.8;

console.log(pi)

firstName = "Ahmet"
age = 21

// pi = 3 const olarak tanımlanan değişken değiştirilemez. Değiştirmeye kalkartsanız kod çalışmaz

console.log(firstName,age,pi)