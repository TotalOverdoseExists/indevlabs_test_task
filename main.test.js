const missingNumber = require('./main')

test('[5,0,1,3,2]', () => {
  expect(missingNumber([5,0,1,3,2])).toBe(4)
})

test('[7,9,10,11,12]', () => {
  expect(missingNumber([7,9,10,11,12])).toBe(8)
})

test('[11,12,13,14,15]', () => {
  expect(missingNumber([11,12,13,14,15])).toBe('No missing number!')
})