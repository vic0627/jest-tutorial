/**
 * Mock Implementations
 *
 * There are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function.
 * This can be done with `jest.fn` or the `mockImplementationOnce` method on mock functions.
 */

const myMockFn1 = jest.fn((cb) => cb(null, true))

myMockFn1((err, val) => console.log(val)) // => true

/**
 * The `mockImplementation` method is useful when you need to define the default implementation of a mock function that is created from another module.
 */

jest.mock('@/foo')
const foo = require('@/foo')

foo.mockImplementation(() => 42)

test('some test', () => {
  const n = foo()
  expect(n).toBe(42)
})

/**
 * When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results,
 * use the `mockImplementationOnce` method
 */

const myMockFn2 = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false))

myMockFn2((err, val) => console.log(val)) // => true
myMockFn2((err, val) => console.log(val)) // => false

/**
 * When the mocked functions runs out of implementations defined with `mockImplementationOnce`,
 * it will execute the default implementation set with `jest.fn` (if it is defined).
 */

const myMockFn3 = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call')

console.log(myMockFn3(), myMockFn3(), myMockFn3(), myMockFn3())
// => 'first  call', 'second call', 'default', 'default'

/**
 * For cases where we have methods that are typically chained (and thus always need to return `this`),
 * we have a surgary API to simplfy this in the form of a `.mockReturnThis()` function that also sits on all mocks.
 */

const myObj = {
  prop: 'foo',
  myMethod: jest.fn().mockReturnThis(),
}

// is the same as

const otherObj = {
  prop: 'foo',
  myMethod: jest.fn(function () {
    return this
  }),
}

test('some test 2', () => {
  const a = myObj.myMethod()
  expect(a.prop).toBe('foo')
})
