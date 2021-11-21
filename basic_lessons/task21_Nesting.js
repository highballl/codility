function solution(S) {
    let stack = [];
    let cnt = 0;

    for (let s of S){
        if (s === '('){
            stack.push(s);
            cnt++;
        } else {
            stack.pop();
            cnt--;
        }
	    if (cnt < 0) {
			return 0
		}
	}

    return cnt === 0 ? 1 : 0
}