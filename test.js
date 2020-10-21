function logPerson() {
    console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
}

const person = { name: 'valya', age: 20, job: 'js' }


function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

const array = [1, 2, 3]

Array.prototype.multBy = function(n) {
    return this.map(function(i) { //this здесь указывает на объект, который находится слева от точки,т.е array.multBy(4) ==> на массив array
        return i * n
    })
}

console.log(array.multBy(4))