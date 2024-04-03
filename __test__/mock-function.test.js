import { jest } from '@jest/globals'
import forEach from '@/forEach'

/**
 * Using a mock function
 */

const mockCallback = jest.fn((x) => 42 + x)

test('forEach mock function', () => {
  forEach([0, 1], mockCallback)

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})

/**
 * `.mock` property
 *
 * All mock functions have this special `.mock` property, which is where data about *how the function has been called* and *what the function returned is kept*.
 * The `.mock` property also tracks the value of `this` for each call, so it is possible to inspect this as well:
 */

const myMock1 = jest.fn()
const a = new myMock1()
console.log(myMock1.mock.instances) // => [<a>]

const myMock2 = jest.fn()
const b = {}
const bound = myMock2.bind(b)
bound()
console.log(myMock2.mock.contexts) // => [<b>]

/**
 * Mock Return Values
 */

const myMock3 = jest.fn()
console.log(myMock3()) // => undefined

myMock3
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValueOnce(true)

console.log(myMock3(), myMock3(), myMock3(), myMock3()) // => 10, 'x', true, true

// Mock funcitons are also very effective in code that uses a functional continuation-passing style.
// Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for,
// in favor of injecting values directly into the test right before they're used.

const filterTestFn = jest.fn()

// Make the mock return `true` for the first call,
// and `false` for the second call.
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

const result = [11, 12].filter((num) => filterTestFn(num))

console.log(result) // => [11]
