function solution(A, B, K) {
    
	let result = Math.floor(B/K) - Math.floor(A/K);
	A % K === 0 ? result += 1 : result

	return result
}