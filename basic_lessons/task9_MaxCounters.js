function solution(N, A) {
    // 배열을 0으로 초기화
    // const arr = Array.from({length: N}, () => 0);
    let arr = Array(N).fill(0);
    
    // 최댓값 카운터 
    let maxCounter = 0;
    let tempMax = 0;

    // 작업 수행
    for (let i=0, leng=A.length; i<leng; i++){
        // 가독성을 위해 idx, val정의
        const val = A[i];
        const idx = val-1;

        if (val === N+1){
            maxCounter = tempMax;
        } else {
            if (arr[idx] < maxCounter){
                arr[idx] = maxCounter;
            }
            arr[idx] += 1;
            if (tempMax < arr[idx]){
                tempMax = arr[idx];
            };
        };
    };
    if (tempMax) {
        arr = arr.map( (elem) => (elem < maxCounter ? maxCounter : elem));
    };
    return arr
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))