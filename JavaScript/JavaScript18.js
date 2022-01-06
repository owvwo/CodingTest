// function solution(participant, completion) {
//     let answer = '';

//     participant.sort((a, b) => {
//         if (a < b) return -1;
//         else if (a > b) return 1;
//         else return 0;
//     })
//     completion.sort((a, b) => {
//         if (a < b) return -1;
//         else if (a > b) return 1;
//         else return 0;
//     })

//     for (let i = 0; i < participant.length; i++) {
//         if (participant[i] !== completion[i]) {
//             answer = participant[i];
//             break;
//         }
//     }

//     return answer;
// }
function solution(participant, completion) {
    const map = new Map();

    for (let i = 0; i < participant.length; i++) {
        let a = participant[i],
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for (let [k, v] of map) {
        if (v > 0) return k;
    }

    return 'nothing';
}
console.log(solution(["marina", "marina", "marina", "vinko"],
    ["marina", "vinko", "marina"]))