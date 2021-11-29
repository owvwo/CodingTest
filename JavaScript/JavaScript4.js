function solution(numbers, target) {
    //BFS 너비우선

    let stack = [0];
    let answer = 0;

    for (let i = 0; i < numbers.length; i++) {
        let temp_Arr = [];
        for (let j = 0; j < stack.length; j++) {
            temp_Arr.push(stack[j] + numbers[i]);
            temp_Arr.push(stack[j] - numbers[i]);
        }
        stack = temp_Arr;
    }
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === target)
            answer += 1;
    }
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3))