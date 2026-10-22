// Задание 1.


const calculateFinalPrice = (price, discount, tax) => {
    discount = (discount / 100) * price
    price = price - discount
    tax = (tax / 100) * price
    const result = price + tax
    return result
}

console.log(calculateFinalPrice(100, 10, 20))


// Задание 2.

const checkAccess = (userName, password) => {
    if (userName === "admin" && password === 123456){
        return "Доступ разрешен"
    }else{
        return "Доступ запрещен"
    }
    
}

console.log(checkAccess("admin", 123456))


// Задание 3.

const getTimeOfDay = time => {
    if (time <= 5){
        return "Ночь"
    }
    if (time >= 6 && time <= 11){
        return "Утро"
    }
    if (time >= 12 && time <= 17){
        return "День"
    }
    if (time >= 18 && time <= 23){
        return "Вечер"
    }
}

console.log(getTimeOfDay(13))


// Задание 4.

const findFirstEven =  (start, end) => {
    for (let x = start; x <= end; x++) {
        if (x % 2 === 0){
            return x
            break
        }
    }
    return "Четных чисел нет"
}

console.log(findFirstEven(9, 9))