function solution(S) {
    let stack = [];
    let open = "({[";
    let close = ")}]";

    for (let i=0, leng=S.length; i<leng; i++) {
        if (open.includes(S.charAt(i))) {
            stack.push(S.charAt(i));
        } else {
            let isOpen = stack[stack.length-1];
            let isClose = S.charAt(i);
            open.indexOf(isOpen) !== close.indexOf(isClose)
                ? stack.push(isClose)
                : stack.pop();
        };
    };

    return stack.length === 0 ? 1 : 0
}