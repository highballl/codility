
function solution(A) {
    let arr = [...A];
    arr = arr.sort((a, b) => a - b)
    max1 = arr[0] * arr[1] * arr[A.length-1];
    max2 = arr[A.length-1] * arr[A.length-2] * arr[A.length-3];
    
    return max1 > max2 ? max1 : max2
}