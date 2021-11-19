function solution(N) {
    var bin = N.toString(2);
    var prev_index = 0;
    var max_gap = 0;
    for (var i=0; i<bin.length; i++){
        if (bin[i] === "1"){
            var gap = i - prev_index - 1;
            if (gap > max_gap){
                max_gap = gap;
            };
            prev_index = i;
        };
    };

    return max_gap
};