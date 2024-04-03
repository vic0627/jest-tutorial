/**
 * @param {T[]} items
 * @param {(item: T) => void} callback
 * @template {unknown} T
 */
export default function (items, callback) {
  for (const item of items) {
    callback(item)
  }
}
