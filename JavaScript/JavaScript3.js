let n1 = 8;
let k1 = 2;
let cmd1 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];

function solution(n, k, cmd) {
    let answer;

    const arr = [];
    const stack = [];
    let ptr = k;
    const prev = {};
    const next = {};

    for (let i = 0; i < n; i++) {
        arr.push("O");
        if (i !== 0) {
            prev[i.toString()] = i - 1;
        }
        if (i !== n - 1) {
            next[i.toString()] = i + 1;
        }
    }

    let break_cmd = cmd.map((v) => v.split(''));
    const forlength = break_cmd.length;

    for (let i = 0; i < forlength; i++) {
        let pos = ptr;
        const type = cmd[i].split(' ')[0];
        const count = cmd[i].split(' ')[1];
        switch (type) {
            case "U":
                for (let i = 0; i < Number(count); i++) {
                    if (pos === undefined) break;
                    pos = prev[pos.toString()];
                }
                ptr = pos;
                break;
            case "D":
                for (let i = 0; i < Number(count); i++) {
                    if (pos === undefined) break;
                    pos = next[pos.toString()]
                }
                ptr = pos
                break;
            case "C":
                stack.push(ptr);
                const prv1 = prev[ptr.toString()]
                const nxt1 = next[ptr.toString()]
                if (prv1 === undefined) {
                    prev[nxt1.toString()] = undefined
                } else if (nxt1 === undefined) {
                    next[prv1.toString()] = undefined
                } else {
                    next[prv1.toString()] = nxt1
                    prev[nxt1.toString()] = prv1
                }
                arr[ptr.toString()] = "X"
                nxt1 === undefined ? ptr = prv1 : ptr = nxt1
                break;

            case "Z":
                const poper = stack.pop();
                const prv2 = prev[poper.toString()];
                const nxt2 = next[poper.toString()];
                if (prv2 !== undefined) next[prv2.toString()] = poper;
                if (nxt2 !== undefined) prev[nxt2.toString()] = poper;
                arr[poper.toString()] = "O";
                break;
            default:
        }
    }
    answer = arr.join('');

    return answer;
}

console.log(solution(n1, k1, cmd1));

