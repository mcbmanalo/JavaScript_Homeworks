console.clear()

function isPalindrome(word) {
  const isString = typeof(word) === 'string'
  if (!isString) return "ERROR: Invalid input type"
  const reversedWord = word.split('').reverse().join('')
  const isPalindromeWord = reversedWord === word
  if (isPalindromeWord) return true
  return false
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("radar"))
console.log(isPalindrome("another"))
console.log(isPalindrome(3))
console.log(isPalindrome([]))
console.log(isPalindrome("kayak"))