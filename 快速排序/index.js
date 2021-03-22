/**
 * 
 * @param {Array<number>} arr
 */
const quickSort = (arr) => {
    const [pivot, ...rest] = arr
    return arr.length <= 1 ? arr : [...quickSort(rest.filter(n => n < pivot)), pivot, ...quickSort(rest.filter(n => n > pivot))]
}