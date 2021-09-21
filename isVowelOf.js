console.clear()

function isVowel(letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return vowels.includes(letter.toLowerCase())
}

function isVowelOf(word) {
  const isString = typeof(word) === 'string'
  if (!isString) return 'ERROR: Invalid input type'
  const vowelsInWord = word.split('').map(letter => {
    if (isVowel(letter)) return letter
  }).join('')
  return vowelsInWord
}

console.log(isVowelOf('hello'))
console.log(isVowelOf(1234))
console.log(isVowelOf(['hello']))
console.log(isVowelOf('UNITED ARAB EMIRATES'))