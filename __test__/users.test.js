import { jest } from '@jest/globals'
import axios from 'axios'
import Users from '@/users'

/**
 * @todo failed to mock external module
 */
jest.mock('axios')
// axios.get = jest.fn()

test('should fetch users', () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }
  axios.get.mockResolvedValue(resp)

  return Users.all().then((data) => expect(data).toEqual(users))
})
