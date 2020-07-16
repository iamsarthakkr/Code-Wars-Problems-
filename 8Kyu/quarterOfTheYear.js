const quarterOf = (month) => {
    return Math.ceil(month / 3)
}

console.log(quarterOf(3));
console.log(quarterOf(6));
console.log(quarterOf(8));
console.log(quarterOf(11));