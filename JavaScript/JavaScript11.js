function solution(answers) {
    let answer = [];
    let supo_1 = [1, 2, 3, 4, 5];
    let supo_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let answerpair = [];

    for (let i = 0; i < 3; i++) {
        answerpair.push({ num: i, count: 0 });
    }

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supo_1[i % supo_1.length])
            answerpair[0].count += 1;
        if (answers[i] === supo_2[i % supo_2.length])
            answerpair[1].count += 1;
        if (answers[i] === supo_3[i % supo_3.length])
            answerpair[2].count += 1;

    }

    answerpair.sort(function (a, b) {
        return (b.count - a.count);
    })

    answer.push(answerpair[0].num + 1);

    //만약 똑같으면 두번째 추가
    if (answerpair[0].count === answerpair[1].count) {
        answer.push(answerpair[1].num + 1);
        //세번째도 똑같으면 추가
        if (answerpair[1].count === answerpair[2].count) {
            answer.push(answerpair[2].num + 1);
        }
    }
    return answer;

}

console.log(solution([1, 3, 2, 4, 2]));

