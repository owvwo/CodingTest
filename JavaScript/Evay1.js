function solution(schedule) {
    let answer = 0;

    //MO : 0 , TU : 1, WE : 2, TH : 3, FR : 4
    let AllSchedule = new Array(5);
    //09:00 ~ 18:00 까지 18개의 공간이 있음.
    for (let i = 0; i < 5; i++) {
        AllSchedule[i] = new Array(18).fill(false);
    }

    for (let i = 0; i < schedule.length; i++) {
        schedule[i] = schedule[i].map(v => v.split(" "));
    }

    for (let j = 0; j < 4; j++) {
        DFS(schedule[0][j], 0);
    }

    function DFS(class_Arr, class_num) {
        //불가능
        let Cango = true;
        //classnum
        let classnum_arr = [];
        let start_arr = [];

        let classtime;
        if (class_Arr.length === 4) {
            classtime = 3;
        } else {
            classtime = 6;
        }

        for (let i = 0; i < class_Arr.length; i += 2) {

            let classnum;
            let start;

            if (class_Arr[i] === 'MO') {
                classnum = 0;
            } else if (class_Arr[i] === 'TU') {
                classnum = 1;
            } else if (class_Arr[i] === 'WE') {
                classnum = 2;
            } else if (class_Arr[i] === 'TH') {
                classnum = 3;
            } else if (class_Arr[i] === 'FR') {
                classnum = 4;
            }

            let times = class_Arr[i + 1].split(":");
            let Hour = Number(times[0]) - 9;
            let Minute = Number(times[1]) / 30;
            start = Hour * 2 + Minute;

            //수업이 겹치면 불가능
            for (let k = 0; k < classtime; k++) {
                if (AllSchedule[classnum][start + k] === true) {
                    Cango = false;
                }
            }

            //저장해놓기
            classnum_arr.push(classnum);
            start_arr.push(start);
        }

        //이 수업을 들을수 있다면
        if (Cango) {
            //수업 추가
            for (let i = 0; i < classnum_arr.length; i++) {
                for (let k = 0; k < classtime; k++) {
                    AllSchedule[classnum_arr[i]][start_arr[i] + k] = true;
                }
            }
            //다음 수업
            class_num++;

            //수업 끝까지 된다면?
            if (class_num === 5) {
                answer++; // 정답추가
            } else {
                //다음 깊이탐색
                for (let j = 0; j < 4; j++) {
                    DFS(schedule[class_num][j], class_num);
                }
            }


            //들을수 있는 수업만 이니까 복귀
            for (let i = 0; i < class_Arr.length; i += 2) {
                let classnum;
                let start;

                if (class_Arr[i] === 'MO') {
                    classnum = 0;
                } else if (class_Arr[i] === 'TU') {
                    classnum = 1;
                } else if (class_Arr[i] === 'WE') {
                    classnum = 2;
                } else if (class_Arr[i] === 'TH') {
                    classnum = 3;
                } else if (class_Arr[i] === 'FR') {
                    classnum = 4;
                }



                let times = class_Arr[i + 1].split(":");
                let Hour = Number(times[0]) - 9;
                let Minute = Number(times[1]) / 30;
                start = Hour * 2 + Minute;

                for (let k = 0; k < classtime; k++)
                    AllSchedule[classnum][start + k] = false;
            }
            //수업 낮추기
            class_num--;

        } else {
            //들을 수 없다면 복귀

        }
    }

    return answer;
}

console.log(solution([
    ["MO 12:00 WE 14:30", "MO 12:00", "MO 15:00", "MO 18:00"],
    ["TU 09:00", "TU 10:00", "TU 15:00", "TU 18:00"],
    ["WE 09:00", "WE 12:00", "WE 15:00", "WE 18:00"],
    ["TH 09:30", "TH 11:30", "TH 15:00", "TH 18:00"],
    ["FR 15:00", "FR 15:00", "FR 15:00", "FR 15:00"]]))