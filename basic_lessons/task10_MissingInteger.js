function solution(A) {
    let obj = {};
    A.forEach( elem => elem in obj ? obj[elem] += 1 : obj[elem] = 1);
    // If the testcase is [1, 3, 6, 4, 1, 2]:
    // { '1': 2, '2': 1, '3': 1, '4': 1, '6': 1 }
    let expectValue = 1;

    const arr = Object.keys(obj);
    for (let i=0; i<arr.length; i++){
        val = Number(arr[i])
        if (val === expectValue) {
            expectValue += 1
        }        
    }

    return expectValue
}

A = [1, 3, 6, 4, 1, 2]
console.log(solution(A))