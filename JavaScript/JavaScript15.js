// function solution(n, edge) {
//     var answer = 0;
//     let graph = new Array(n + 1);
//     let min_distance = new Array(n + 1).fill(0);

//     for (let i = 0; i < graph.length; i++) {
//         graph[i] = [];
//     }

//     for (let [start_node, end_node] of edge) {
//         graph[start_node].push(end_node);
//         graph[end_node].push(start_node);
//     }

//     console.table(graph);

//     let count = 0;
//     let stack = [1];
//     let arrived = [1];


//     function BFS(stack) {
//         let temp_stack = [];
//         count++;

//         if (arrived.length === n) {
//             return 0;
//         }

//         for (let i = 0; i < stack.length; i++) {
//             graph[stack[i]].forEach(v => {
//                 if (arrived.indexOf(v) === -1) {
//                     arrived.push(v);
//                     temp_stack.push(v);
//                     min_distance[v] = count;
//                 }
//             })
//         }

//         stack = temp_stack;

//         BFS(stack);
//     }

//     //너비 탐색
//     BFS(stack);

//     //최대 거리 구하기
//     let max_distance = Math.max(...min_distance);

//     for (let i = 0; i < min_distance.length; i++) {
//         if (max_distance === min_distance[i]) {
//             answer++;
//         }
//     }

//     return answer;
// }

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡdijkstra알고리즘ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function solution(n, edge) {
    const CANT = -1;
    let answer = 0;
    let graph = new Array(n + 1).fill(1);
    let start = 1;
    let stack = [];

    for (let i = 0; i < graph.length; i++)
        graph[i] = [];

    for (let [start_node, end_node] of edge) {
        graph[start_node].push(end_node);
        graph[end_node].push(start_node);
    }


    let distance = [0];
    for (let i = 0; i < n; i++)
        distance.push(CANT);

    distance[start] = 0;
    stack.push(start);

    while (stack.length) {
        let node = stack.shift();
        let f_arr = graph[node];
        for (let value of f_arr) {
            if (distance[value] === CANT) {
                distance[value] = distance[node] + 1;
                stack.push(value);
            }
        }
    }

    //최대 거리 구하기
    let max_distance = Math.max(...distance);

    for (let i = 0; i < distance.length; i++) {
        if (max_distance === distance[i]) {
            answer++;
        }
    }

    return answer;

}


console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))