/**
 * @param {T} data
 * @param {boolean} [failed]
 * @returns {Promise<T>}
 * @template {unknown} T
 */
export default async function (data, failed) {
  if (!failed) return data
  else throw data
}
