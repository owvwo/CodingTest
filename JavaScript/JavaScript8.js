function solution(array, commands) {
    var answer = [];
    for(let i =0; i< commands.length; i++){
        //let start = commands[i][0];
        //let end = commands[i][1];
        const [start, end, position] = commands[i];
        let temp = array.slice(start - 1,end);
        temp.sort((a, b) => {
            return a-b;
        });
        answer.push(temp[position - 1]);
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))