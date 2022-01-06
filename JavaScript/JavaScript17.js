function solution(citations) {

    citations = citations.sort((a, b) => {
        return a - b;
    })

    let start = citations[citations.length - 1];
    let pick;
    let temp;

    while (true) {
        pick = citations.indexOf(start);
        if (pick === -1) {

        } else {
            temp = pick;
        }
        if (citations.length - temp >= start) {
            break;
        }
        start--;
    }


    return start;
}

// function solution(citations) {
//     citations = citations.sort(sorting);
//     var i = 0;
//     while (i + 1 <= citations[i]) {
//         i++;
//     }
//     return i;


//     function sorting(a, b) {
//         return b - a;
//     }
// }


console.log(solution([10, 10, 10]));