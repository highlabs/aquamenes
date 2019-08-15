export default function splitArray(array) {
  const half = Math.floor(array.length / 2)
  const firstHalf = array.slice(0, half)
  const secondHalf = array.slice(half, array.length)
  return [firstHalf, secondHalf]
}
