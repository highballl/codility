function solution(A) {
    
    const L = A.length;
    let arr = new Array();
    let intersect_cnt = 0;

    for (let i=0; i<L; i++){
        let circle = {
            left: i-A[i],
            right : i+A[i]
        }
        arr.push(circle);
    };

    // left를 기준으로 정렬하기
    arr.sort( (a, b) => a.left - b.left );

    for (let i=0; i<L-1; i++){
        for (let j=i+1; j<L; j++){
            if (intersect_cnt > 1e7){
                return -1;
            }
            if (arr[j].left > arr[i].right){
                break;
            }
            if (arr[j].left >= arr[i].left && arr[j].left <= arr[i].right){
                intersect_cnt++;
            }
        }
    }

    return intersect_cnt
}