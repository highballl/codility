function solution(A) {
    let arr = new Array(...A);
    let result = 0;
    arr = arr.sort((a, b) => a - b);

    const leng = A.length;

    for (let i=leng-1; i>0; i--){
        if (i===1) break
        if (arr[i-2] + arr[i-1] > arr[i]) result = 1
    }

    return result
}