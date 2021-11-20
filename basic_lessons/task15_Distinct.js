function solution(A) {
    let result = new Set(A)
    return result.size
}

/*
Logic_1

function solution(A) {
    let obj = {};
    A.map( (elem) => obj[elem] = 1);
    return Object.keys(obj).length
}

*/