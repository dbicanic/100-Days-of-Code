# https://www.hackerrank.com/challenges/birthday-cake-candles/problem

def birthdayCandles(arr)
	sortedArr = arr.sort {|a,b| b <=> a}
	sortedArr.count(sortedArr[0])
end
