const stopAt42 = arr => {
    const index42 = arr.indexOf(42)

    const arr2 = arr.filter((item, index, array) => index < index42 && index < array.length)
    return arr2
}

stopAt42([1, 2, 4, 42, 88])