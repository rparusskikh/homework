// Задание 1.

const users = [
{ name: 'Alex', age: 24, isAdmin: false },
{ name: 'Bob', age: 13, isAdmin: false },
{ name: 'John', age: 31, isAdmin: true },
{ name: 'Jane', age: 20, isAdmin: false },
]
users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)


// Задание 2.

getUserAverageAge = users => {
    let totalAge = 0
    for (let i = 0; i < users.length; i++) {
        totalAge += users[i].age
    }
    let middleAge = totalAge / users.length
    console.log(middleAge)
}


// Задание 3.

const admins = []
getAllAdmins = users => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true){
            admins.push(users[i])
        }
    }
    console.log(admins)
}


// Задание 4.
const empty = []
first = (arr, n) => {
    if (n === undefined){
        const firstElement = []
        firstElement.push(arr[0])
        return firstElement
    }else{
        if (n === 0){
            return empty
        }else{
            const firstElements = []
            for (let i = 0; i < n; i++) {
                firstElements.push(arr[i])
            } 
            return firstElements
        }
    }
}