export default (array, cb) =>
  array.map((a, index) => {
    const first = index === 0
    const last = index === array.length - 1
    const reverseIndex = array.length - index - 1
    const even = index % 2 === 0
    const odd = !even
    return cb(a, { first, last, reverseIndex, index, even, odd })
  })
