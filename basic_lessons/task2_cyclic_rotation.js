function solution(A, K) {
    K = K % A.length;
    const idx = A.length - K;
    return [...A.slice(idx), ...A.slice(0, idx)]
};