// Задание 1.

const x = prompt("Введите число для задания №1", 0)
if (x % 2 == 0){
    console.log("Число чётное")
} else{
    console.log("Число нечётное")
}


// Задание 2.

const age = prompt("Введите свой возраст для задания №2", 0)
const discount = age < 18 ? 10 : (age >= 18 && age <= 65) ? 20 : age > 65 ? 30 : "Введено некоректное значение"
console.log(`Скидка ${discount}%`)


//Задание 3.

const userName = prompt("Введите имя пользователя для задания №3", "Имя")
const password = prompt("Введите пароль для задания №3", 0)
if ((userName == "admin" || "user") && (password == 123456)){
    console.log("Доступ разрешен")
}else {
    console.log("Доступ запрещен")
}


// Задание 4.

const weight = prompt("Введите вес посылки для задания №4", 0)
const type = prompt("Введите тип посылки для задания №4", 0)
if (weight <= 0){
    console.log("Некорректный вес поссылки")
}
if (type != "Стандарт" || "Экспресс" || "Премиум"){
    console.log("Неверный тип посылки")
}
const price = weight < 1 ? 5 : (weight >= 1 && weight <= 5) ? 10 : weight > 5 ? 15 : "Введено некоректное значение"
const coefficient = type == "Стандарт" ? 1 : type == "Экспресс"  ? 1.5 : type == "Премиум" ? 2 : "Введено некоректное значение"
const finalPrice = price * coefficient
alert(`Итоговая стоимость товара ${finalPrice}$`)