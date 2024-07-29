// Functions


// Parametresiz Fonksiyon

function sayHello(){
    console.log("Merhaba Arkadaşlar")

}

sayHello()

// Parametreli Fonksiyon
function great(name){

    console.log(`Merhaba ${name}`)
}

great("Serdar")

function addNumbers(a,b){
    return a+b;
}

var sonuc =  addNumbers(12,28)
console.log(sonuc)


function pow(a,b){
    return a**b
}

let sonuc2 = pow(2,5)
console.log(sonuc2)

const square =(num) =>{ // => bana bir fonksiyon tanımlayacağını söylüyor
    return num*num
}

console.log(square(5))

var cube = (num) =>{
    return num**3
}

console.log(cube(5))