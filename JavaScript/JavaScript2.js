function solution(places) {
    var answer = [];
    for (let i = 0; i < places.length; i++) {
        answer.push(keep_dist(places[i]));
    }
    return answer;
}


function keep_dist(place) {
    place = place.map(v => v.split(''));

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (place[row][col] === 'P') {
                //오른쪽 가로 1칸
                if (col < 4 && place[row][col + 1] === 'P') {
                    return 0;
                }
                // 가로 두칸 체크
                if (col < 3 && place[row][col + 2] === 'P' && place[row][col + 1] === 'O') {
                    return 0;
                }

                // 세로 한칸 체크
                if (row < 4 && place[row + 1][col] === 'P') {
                    return 0;
                }
                // 세로 두칸 체크
                if (row < 3 && place[row + 2][col] === 'P' && place[row + 1][col] === 'O') {
                    return 0;
                }
                //오른쪽 아래
                if (row < 4 && col < 4 && place[row + 1][col + 1] === 'P' && !(place[row + 1][col] === 'X' && place[row][col + 1] === 'X')) {
                    return 0;
                }
                //왼쪽 아래
                if (row < 4 && col > 0 && place[row + 1][col - 1] === 'P' && !(place[row][col - 1] === 'X' && place[row + 1][col] === 'X')) {
                    return 0;
                }

            }
        }
    }
    return 1;
}

let testcase1 = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]
solution(testcase1);