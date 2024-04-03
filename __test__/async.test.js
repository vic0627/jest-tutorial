import fetchData from '@/fetchData'

/**
 * Promises
 */

test('the data is peanut butter', () => {
  const t = 'peanut butter'
  return fetchData(t).then((data) => {
    expect(data).toBe(t)
  })
})

/**
 * Async/Await
 */

test('the data is peanut butter', async () => {
  const t = 'peanut butter'
  const data = await fetchData(t)
  expect(data).toBe(t)
})

test('the fetch fails with an error', async () => {
  expect.assertions(1) // describing how many times of `expect()` will be executed
  const e = new Error('error')
  try {
    await fetchData(e, true)
  } catch (error) {
    expect(error).toEqual(e)
  }
})

// combining `async` and `await` with `.resolves` or `.rejects`...

test('the data is peanut butter', async () => {
  const t = 'peanut butter'
  await expect(fetchData(t)).resolves.toBe(t)
})

test('the fetch fails with an error', async () => {
  const e = new Error('error')
  await expect(fetchData(e, true)).rejects.toEqual(e)
})

/**
 * Callback
 */

test('the data is peanut butter', (done) => {
  const t = 'peanut butter'
  function callback(error, data) {
    if (error) {
      done(error)
      return
    }
    try {
      expect(data).toBe(t)
      done()
    } catch (error) {
      done(error)
    }
  }
  async function fetchData(callback) {
    callback(null, t)
  }

  fetchData(callback)
})
