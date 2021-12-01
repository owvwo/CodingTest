function solution(begin, target, words) {
    let answer = 0;

    //만약 words 배열에 target이 없을 시 0을 반환
    if (!words.includes(target))
        return 0;
    //BFS

    let stack = [];
    stack.push(begin);

    Loop1:
    for (let i = 0; i < words.length; i++) {
        let nextstack = [];
        for (let j = 0; j < stack.length; j++) {
            for (let k = 0; k < words.length; k++) {
                let matchcount = 0;
                for (let num = 0; num < begin.length; num++) {
                    if (words[k][num] === stack[j][num])
                        matchcount += 1;
                }

                // 1개 빼고 같고, 다음 stack 배열에서 겹치지 않게 저장
                if (matchcount === begin.length - 1 && !nextstack.includes(words[k])) {
                    //그런데 해당 단어가 target과 같을 때,
                    if (words[k] === target) {
                        answer = i + 1;
                        break Loop1;
                    }
                    nextstack.push(words[k]);
                }
            }
        }
        stack = nextstack;
    }

    return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))