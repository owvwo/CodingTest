function solution(progresses, speeds) {
    let answer = [];
    //현재 완료된 작업번째
    let finish = 0;

    while (true) {
        progresses = progresses.map((value, index) => {
            let percent = value + speeds[index]
            return (percent >= 100) ? 100 : percent;
        });
        let pick = progresses.indexOf(100, finish);
        if (pick === finish) {
            let count = 0;
            while (true) {
                if (progresses[pick] === 100) {
                    count++;
                    pick++;
                }
                else
                    break;
            }

            answer.push(count);
            finish = pick;
        }
        if (finish === progresses.length) {
            break;
        }
    }
    return answer;
}

// function solution(progresses, speeds) {
//     let answer = [0];
//     let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//     let maxDay = days[0];

//     console.table(days);

//     for (let i = 0, j = 0; i < days.length; i++) {
//         if (days[i] <= maxDay) {
//             answer[j] += 1;
//         } else {
//             maxDay = days[i];
//             answer[++j] = 1;
//         }
//         console.table(answer);
//     }

//     return answer;
// }


console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))