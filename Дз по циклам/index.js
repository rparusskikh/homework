// Задача 1.

for (let x = 1; x <= 20; x++) {
    if (x % 4 === 0) {
        continue
    }
    console.log(x)
}


// Задача 2.

let number = prompt("Введите число", 0)
let result = 1

for (let y = 1; y <= number; y++) {
    result = result * y
}
console.log(`Факториал числа ${number} равен ${result}`)


// Задача 3.

let field = ""

for (let line = 1; line <= 8; line++) {
    if (line % 2 ===0){
        for (let column = 1; column <= 8; column++) {
            if (column % 2 === 0){
                field += "#"
            }else{
                field += " "
            }
        }
    }else{
        for (let column = 1; column <= 8; column++) {
            if (column % 2 === 0){
                field += " "
            }else{
                field += "#"
            }
        } 
    } 
    field += "\n"
}

console.log(`${field}`)