function solution(A) { 
    const found = new Set();
    for (const num of A) {
        if (found.has(num) || num > A.length) { return 0 } 
        found.add(num); 
    } 
    return 1; 
}