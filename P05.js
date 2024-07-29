// Array'ler içinde bir dizi veri saklayan yapılardır

var fruit = ["elma","armut","muz","portakal","ayva","üzüm"]

console.log(fruit[3])

console.log(fruit.length)
fruit[0]="Kayısı"
console.log(fruit[0])
console.log(fruit)

fruit.push("elma")
console.log(fruit)

/*
    Dizi Methodları:
    Diziler, bir dizi methodu aracılığıyla çeşitli işlemler gerçekleştirmek için kullanılır.
    Bazı yaygın dizi methodları şunlardır:

    push(): Dizi sonuna yeni bir eleman ekler.
    pop(): Dizinin sonundaki elemanı kaldırır
    shift(): Dizinin başındaki elemanı kaldırır
    unshift(): Diziye yeni bir eleman ekler.
    splice(): Belirli bir indexten başlayarak belirli sayıda eleman ekler veya kaldırır
    indexOf(): Belirli bir elemanın indexini bulur.
    concat(): İki veya daha fazla diziyi birleştirir.
*/

console.log(9%2)
console.log("-------------------------------------------")
var age = 21

if(age>18){
    console.log("Ehliyet Alabilirsiniz!")
}else{
    console.log("Ehliyet Alamazsınız!")
}