function solution(A) {
    const aLen = A.length;
    const whole = Array.from(new Array(A.length+1), (x, i) => i + 1);
    if (aLen === 0){
        return 1
    } else {
        var ASum = A.reduce((sum, elem) => sum + elem, 0);
        var wholeSum = whole.reduce((sum, elem) => sum + elem, 0);
    }

    return wholeSum - ASum;
}