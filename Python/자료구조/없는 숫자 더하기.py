#https://programmers.co.kr/learn/courses/30/lessons/86051

def solution(numbers):
    result = sum(list(range(10)))
    return result - sum(numbers)

numbers = [1,2,3,4,6,7,8,0]
answer = solution(numbers)
print(answer)