var person = {
    firstName: "Murat",
    lastName: 'Yiğit',
    age:20,
    isHeStudent:true,
}

console.log("=======================================================")
console.log(person)
console.log("-------------------------------------------------------")
console.log("İsim: " + person.firstName)
console.log("Soyisim: " + person.lastName)
console.log("Yaş" + person.age)
console.log(`Öğrenci mi: ${person.isHeStudent}`)

var myInfo = {}

console.log(myInfo)
myInfo.firstName="Furkan"
myInfo.lastName="Hatapoğlu"
myInfo.age = 18.5

console.log(myInfo)

delete myInfo.age
console.log(myInfo)


var okul={
    isim:"Mest Okullari",
    siniflar:{
        lise:{sinifAd:"9A", sinifAd2:"9B"}
    }
}

console.log(okul.isim)
console.log(okul.siniflar.sinifAd2)
delete okul.siniflar.sinifAd2
