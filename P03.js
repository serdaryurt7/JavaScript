/*
    5 Data Type vardır.
    String - Numbers - TRUE/FALSE - Null - Unefined

*/

var firstName = "Tarık"
let lastName = "Yiğit"
var age = 21
isHeStudent = false
let studentNumber = null
var stSaveYear = undefined


console.log(firstName,lastName,isHeStudent,studentNumber,stSaveYear)

//Concatination : String birleştirme

var message ="Yeni Kullanıcı Bilgileri \nİsim: " + firstName + "\nSoyisim: " + lastName + "\nYaş: " + age

console.log(message)
console.log("=========================================================================================")

// Interpolation: deyim içi eklemek

var message2 =  `Yeni Kullanıcı Bilgileri \nİsim: ${firstName} \nSoyisim: ${lastName} \nYaş: ${age}`

console.log(message2)