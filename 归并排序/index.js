/**
 * 
 * @param {Array<number>} a
 * @param {Array<number>} b 
 * @returns {Array<number>}返回结果
 */
let merge = (a, b) => {
    //i指针1，k指针2
    let c = [], i = 0, k = 0
    while (i < a.length || k < b.length) {
        if (i >= a.length) {
            c.push(b[k])
            k++
        } else if(k >= b.length) {
            c.push(a[i])
            i++
        }
        else if (a[i] < b[k]) {
            c.push(a[i])
            i++
        } else {
            c.push(b[k])
            k++
        }
    }
    return c
}

let math_merge = (a, b) => 
    a.length === 0 ? b :
        b.length === 0 ? a :
            a[0] > b[0] ? [b[0], ...math_merge(a, b.slice(1))] :
                [a[0], ...math_merge(a.slice(1), b)]

    