function findMultiples(integer, limit) {
    let arr = [];
    for (let index = integer; index <= limit; index += integer) {
        arr.push(index)
    }

    return arr

}

console.log(findMultiples(2, 20));
console.log(findMultiples(6, 20));
console.log(findMultiples(20, 224));