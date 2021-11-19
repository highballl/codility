function solution(A) {
    let obj = {};
    for (let i=0; i<A.length; i++){
        if (obj[A[i]] != undefined){
            const curr = obj[A[i]];
            obj[A[i]] = curr + 1;
        } else {
            obj[A[i]] = 1;
        };
    };

    keys = Object.keys(obj);
    for (let i=0; i<keys.length; i++){
        if (obj[keys[i]] % 2 === 1){
            return parseInt(keys[i])
        }
    }

    return 
};