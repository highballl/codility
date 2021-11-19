function solution(X, A) {
    const newSet = new Set();
     
    for (let idx = 0, len = A.length; idx < len; idx++) {
      const value = A[idx];
      newSet.add(value);
          
      if (newSet.size === X) {
        return idx;
      }
    }
      
    return -1;
  }