function solution(H) {
    let blocks = 0;
    let stack = []; // for last elements
    const N = H.length;

    for (let i = 0; i<N; i++){
        while (stack.length > 0 && H[i] < stack[stack.length-1]){
            stack.pop();
        }
        if (stack.length <= 0 || H[i] > stack[stack.length-1]){
            stack.push(H[i]);
            blocks++;
        }
    }

    return blocks
}