function checkExam(array1, array2) {
    //if length of the two arrays are not equal, return null
    if (array1.length !== array2.length) return null

    //setup a score variable
    let score = 0
    //loop through the two arrays
    for (let i = 0; i < array1.length; i++) {
        //compare given answer with the correct answer for question i
        //if answer correct- +4
        if (array1[i] === array2[i]) {
            score += 4
        }
        //if no answer - +0
        else if (array2[i] === '') {
            score += 0
        }
        //worng answer - -1
        else {
            score += -1
        }
    }

    return score > 0 ? score : 0
}


console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));