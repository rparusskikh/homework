// Задача 1.

let person = {
    name: "Вася",
    secondName: "Пупкин",
    age: 13,
    hobby: "Футбол"
}

console.log(`Имя: ${person.name}, Фамилия: ${person.secondName}, Возраст: ${person.age}, Хобби: ${person.hobby}`);


// Задача 2.

const object2 = {
}

function isEmply(obj){
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmply(object2))


// Задание 3.

const task = {
    title: "Вася",
    description: "Пупкин",
    isCompleted: "Футбол"
}

const cloneAndModify = (object, modifications) => {
    return {...object, ...modifications}
    
}
console.log(task)
console.log(cloneAndModify(task, { title: "Петя" }))

// Задание 4. 

const myObject = {
    method1() {
        console.log("Метод 1 вызван")
    },

    method2() {
        console.log("Метод 2 вызван")
    },

    property: "Это не метод"
}

const callAllMethods = (object4) => {
    for (const key in object4) {
    if (typeof object4[key] === 'function') {
      object4[key]();
    }
  }
}

callAllMethods(myObject)