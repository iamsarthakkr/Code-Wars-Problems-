function quadratic(x1, x2) {
    let arr = [1]

    //x*x + (- (x1 + x2) * x ) + x1*x2
    //has roots x1 and x2
    arr.push(-1 * (x1 + x2)) //eoeff of x
    arr.push(x1 * x2) //constant term

    // Answer in array
    return arr
}
quadratic(0, 1)
quadratic(1, 1)
quadratic(-4, -9)
quadratic(-5, -4)
quadratic(4, -9)
quadratic(5, -4)