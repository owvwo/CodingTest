function solution(brown, yellow) {
    let answer = [];
    let stack = [];

    find_divisor(yellow, stack);

    for (let i = 0; i < stack.length; i++) {
        let width = stack[i].a;
        let height = stack[i].b;

        if (brown === 2 * (width + height) + 4) {
            return [stack[i].a + 2, stack[i].b + 2];
        }
    }
}

function find_divisor(yellow, stack) {
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            //긴 변을 a로 설정
            let temp = { a: yellow / i, b: i };
            stack.push(temp);
        }
    }
}

console.log(solution(24, 24));