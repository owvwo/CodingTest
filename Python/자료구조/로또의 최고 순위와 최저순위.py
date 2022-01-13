#https://programmers.co.kr/learn/courses/30/lessons/77484
def solution(lottos, win_nums):
    zero_count = 0
    count = 0
    for i in lottos:
        if(i == 0):
            zero_count+=1
            continue
        for j in win_nums:
            if(i == j):
                count+=1
    
    return [6 if zero_count+count < 2 else 7 - (zero_count+count), 6 if count < 2 else 7 - count]

lottos = [45, 4, 35, 20, 3, 9]	
win_nums = [45, 4, 35, 20, 3, 9]	

answer = solution(lottos, win_nums)

print(answer)