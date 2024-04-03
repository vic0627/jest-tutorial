/**
 * Repeating Setup
 *
 * - `beforeEach`
 * - `afterEach`
 *
 * these two hooks can also handle asynchronous code via returning a promise
 */

beforeEach(() => {
  // some setup tasks that need to be invoked before each tests
})

afterEach(() => {
  // some cleanup tasks that need to be invoked after each tests
})

/**
 * One-Time Setup
 *
 * - `beforeAll`
 * - `afterAll`
 *
 * these two hooks can also handle asynchronous code via returning a promise
 */

beforeAll(() => {
  // these tasks will be executed once at the beginning of the file
})

afterAll(() => {
  // these tasks will be executed once at the end of the file
})

/**
 * Scoping
 *
 * The top level `before*` and `after*` hooks apply to every test in a file.
 * The hooks declared inside a `describe` block apply only to the tests with that `describe` block.
 */

beforeEach(() => {
  // applies to all tests in this file
  // Note that the top-level `beforeEach` is executed before the `beforeEach` inside the describe block
})

describe('some testing messages', () => {
  beforeEach(() => {
    // applies only to tests in this describe block
  })
})

/**
 * Order of Execution
 *
 * Jest executes all describe handlers in a test file before it executes any of the actual tests.
 */

/**
 * General Advice
 *
 * To run only one test with Jest, temporarily that `test` command to a `test.only`.
 */

test.only('this will be the only test that runs', () => {
  // ...
})

test('this test will not run', () => {
  // ...
})
