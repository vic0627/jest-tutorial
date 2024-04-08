/**
 * Mock Names
 *
 * You can opitonally provide a name for your mock funcitons,
 * which will be displayed instead of `jest.fn()` in the test error output.
 *
 * Use `.mockName()` if you want to be able to quickly identify the mock function reporting an error in your test output.
 */

const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation((scalar) => 42 + scalar)
  .mockName('add 42')

test('mock name test', () => {
  const a = myMockFn(42)
  expect(a).toBe(84)
})
