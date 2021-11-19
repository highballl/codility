function solution(A) {
    function sum(arr){
        let result = arr.reduce((acc, elem) => acc + elem);
        return result
    }

    let diff_min = 1000000000000;
    let left = 0;
    let right = sum(A);
    for (let i=0; i<A.length; i++){
        left += A[i];
        right -= A[i];
        diff = Math.abs(left-right);
        if (diff < diff_min){
            diff_min = diff
        }
    };
    return diff_min   
}