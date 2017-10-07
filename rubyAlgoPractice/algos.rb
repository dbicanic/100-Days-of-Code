# This should reverse a string
def reverseString(str)
	str.reverse!
end

def reverseStringManual(str)
	arr = str.split("")
	revArr = []

	arr.each do |i|
		revArr.unshift( i )
	end
	revArr.join("")
end

def translatePigLatin(str)
	return "#{str}way" if str[0] =~ /[aeoui]/i

	arr = str.split("")

	until arr[0] =~ /[aeoui]/i
	 	char = arr.shift
		arr << char
	end
	
	arr.join("") + "ay"

end