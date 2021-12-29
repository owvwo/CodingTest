function solution(numbers) {
    let visited = new Array(numbers.length).fill(false);
    let stack = "";
    let Primearr = [];

    function DFS(number, numbers) {
        visited[number] = true;
        stack += numbers[number];
        let num = Number(stack);

        if (isPrime(num) && Primearr.indexOf(num) === -1) {
            Primearr.push(num);
        }

        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i])
                DFS(i, numbers);
        }

        stack = stack.slice(0, -1);
        visited[number] = false;
    }


    for (let first = 0; first < numbers.length; first++) {
        DFS(first, numbers);
    }

    return Primearr.length;

}
function isPrime(number) {
    if (number <= 1)
        return false; // 소수가 아님

    if (number % 2 === 0)
        return number === 2 ? true : false; //2면 소수

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;

}

console.log(solution("17"));