function solution(n, k, bulbs) {
    let answer;
    let count = 0;
    let maxcount = n * k;
    let stack = [];


    stack.push(bulbs);


    function BFS(stack_arr, count) {
        //카운트 추가
        count++;
        let temparr = [];

        for (let i = 0; i < stack_arr.length; i++) {
            //순서대로 RGB 바꾸기
            for (let j = 0; j < n - k + 1; j++) {
                //DFS 반복
                let tempstring = "";
                let count = k;
                let start = j;
                for (let string_at = 0; string_at < n; string_at++) {

                    if (count === 0 && start > 0) {
                        tempstring += stack_arr[i][string_at];
                        if (start > 0) {
                            start--;
                        }
                    } else {
                        if (stack_arr[i][string_at] === 'R')
                            tempstring += 'G';
                        else if (stack_arr[i][string_at] === 'G') {
                            tempstring += 'B';
                        } else {
                            tempstring += 'R';
                        }
                        count--;

                    }
                }
                string_at = 0;
                console.log(tempstring);
            }
        }

    }

    BFS(stack, count);

    console.table(stack);


    return answer;
}
console.log(solution(6, 3, "RBGRGB"))