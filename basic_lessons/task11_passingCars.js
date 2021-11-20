function solution(A) {
    let result = 0;
    let acc = 0;

    for (elem of A) {
        if (elem === 1){
            result += acc
        } else {
            acc += 1
        }
    };

    return result > 1e9 ? -1 : result
}