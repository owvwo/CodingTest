function solution(n, computers) {
    var answer = 0;

    //visited 배열 생성 (1 ~ n)
    let visited = new Array(n + 1).fill(false);
    visited[0] = true;

    //graph vector 배열 생성 (1 ~ n)
    let graph = new Array(n + 1);
    for (let i = 0; i < graph.length; i++)
        graph[i] = [];


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1 && i !== j)
                graph[i + 1].push(j + 1);
        }
    }


    while (true) {

        let stack = [];

        //처음 포인터 설정
        for (let i = 0; i < visited.length; i++) {
            if (!visited[i]) {
                stack.push(i);
                visited[i] = true;
                break;
            }
        }

        //visted가 모두 true 일때
        if (stack.length === 0)
            break;

        //BFS 탐색
        while (stack.length !== 0) {
            let temparr = [];

            for (let i = 0; i < stack.length; i++) {
                graph[stack[i]].forEach((point) => {
                    if (!visited[point]) {
                        temparr.push(point);
                        visited[point] = true;
                    }
                })
            }
            stack = temparr;
        }

        //BFS 탐색마다 1개의 network
        answer += 1;
    }

    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));