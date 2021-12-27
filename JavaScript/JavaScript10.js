function solution(citations) {
    citations.sort((a, b) => {
        return a - b;
    })

    let index = 0;
    let answer;

    for (let index = 0, i = 0; i < 10000; i++) {
        if (citations[index] <= i) {
            while (true) {
                if (citations[index] <= i) {
                    index++;
                } else
                    break;
            }
        }

        if (i === citations[index]) {
            if (i > citations.length - index + 1) {
                answer = i - 1;
                break;
            }
        } else {
            if (i > citations.length - index) {
                answer = i;
                break;
            }
        }
    }

    return answer;
}

console.log(solution([1, 2, 4, 5, 5]));
