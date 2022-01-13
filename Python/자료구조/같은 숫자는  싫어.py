#https://programmers.co.kr/learn/courses/30/lessons/12906
def solution(arr):
    answer = []
    
    pick = 0
    answer.append(arr[pick])
    
    for i in arr[1:]:
        if(i == answer[pick]):
            continue
        else:
            answer.append(i)
            pick+=1
    
    return answer

#출력
arr = [1,1,3,3,0,1,1]
answer = solution(arr)
print(answer)