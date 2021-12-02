function solution(tickets) {
    var answer = [];

    //tickets 정렬

    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] < b[1])
                return -1;
            else
                return 1;
        } else {
            if (a[0] < b[0])
                return -1;
            else
                return 1;
        }
    });

    //경로 이동한 것을 확인하는 배열 추가
    for (let i = 0; i < tickets.length; i++) {
        tickets[i].push(false);
    }

    let stack = [];
    let finish = false;

    function DFS(vertex, ticketroute) {

        if (finish)
            return;

        stack.push(vertex);

        //모든 경로 사용 시, stack 보존
        if (stack.length === tickets.length + 1) {
            answer = stack;
            finish = true;
            return;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] === vertex && !tickets[i][2]) {
                tickets[i][2] = true;
                DFS(tickets[i][1], i);
            }
        }

        //이쪽 방향이 아닐 시 stack에서 제거 후 다시 경로 잇기
        if (ticketroute !== -1 && !finish) {
            stack.pop();
            tickets[ticketroute][2] = false;
        }

    }

    DFS("ICN", -1);

    return answer;

}

console.log(solution([["SFO", "ATL"], ["ICN", "ATL"], ["ICN", "SFO"], ["ATL", "ICN"], ["ATL", "SFO"]]));

