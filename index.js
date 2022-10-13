const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pwEl1 = document.getElementById("pw-button1")
const pwEl2 = document.getElementById("pw-button2")
let passwLength = 8

function passwl8() {
    passwLength = 8
}

function passwl16() {
    passwLength = 16
}

function genpassw() {
    pwEl1.textContent = ""
    pwEl2.textContent = ""
    for (let i=1; i<=passwLength; i++) {
        randNum1 = Math.floor(Math.random()*characters.length)
        randNum2 = Math.floor(Math.random()*characters.length)
        pwEl1.textContent += characters[randNum1]
        pwEl2.textContent += characters[randNum2]
    }
}

