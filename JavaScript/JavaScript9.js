function solution(numbers) {
    let answer = "";

    //0 앞 뒤를 변경해서 순서를 정해준다.
    numbers.sort(function (a, b) {
        return Number(String(b) + String(a)) - Number(String(a) + String(b));
    });

    numbers.forEach((number) => {
        answer += String(number)
    });

    //0 일때 테스트 케이스 추가
    if (Number(answer) === 0) {
        return '0';
    } else {
        return answer;
    }

}

console.log(solution([0, 0]));