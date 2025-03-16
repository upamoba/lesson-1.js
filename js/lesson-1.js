
const number = Number(prompt("Введіть число:"));

// Перевіряємо, чи число дорівнює 10
if (number === 10) {
    alert("Вірно");
} else {
    alert("Невірно");
}

function removeCharacter(str, char){
    let newstr = ''
    for( let i = 0; i < str.length; i += 1){
        if(str[i] !== char){
            newstr+= str[i]
        }
    }
    return newstr
}
