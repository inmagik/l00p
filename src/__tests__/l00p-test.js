import loop from '../index'

describe('l00p', () => {
  it('should return corrent looping information', () => {
    const looper = jest.fn()
      .mockImplementationOnce((name, { index, first, last, reverseIndex, even, odd }) => {
        expect(even).toBe(true)
        expect(odd).toBe(false)
        expect(index).toBe(0)
        expect(first).toBe(true)
        expect(last).toBe(false)
        expect(reverseIndex).toBe(2)
      })
      .mockImplementationOnce((name, { index, first, last, reverseIndex, even, odd }) => {
        expect(even).toBe(false)
        expect(odd).toBe(true)
        expect(index).toBe(1)
        expect(first).toBe(false)
        expect(last).toBe(false)
        expect(reverseIndex).toBe(1)
      })
      .mockImplementationOnce((name, { index, first, last, reverseIndex, even, odd }) => {
        expect(even).toBe(true)
        expect(odd).toBe(false)
        expect(index).toBe(2)
        expect(first).toBe(false)
        expect(last).toBe(true)
        expect(reverseIndex).toBe(0)
      })

    loop(['Giova', 'Maik', 'Skaffo'], looper)
  })
})
