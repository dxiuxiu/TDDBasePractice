// ## todo

// * 1 -> 1
// * 2 -> 2
// * 3 -> Fizz
// * 4 -> 4
// * 5 -> Buzz
// * 6 -> Fizz
// * 8 ->8
// * 9 ->Fizz
// * 10-> Buzz
// * 11-> 11
// * 12-> Fizz
// * 13-> 13
// * 14-> 14
// * 15-> FizzBuzz
// * 16-> 16
// * 17-> 17
// * 18-> Fizz
// * 19-> 19
// * 20-> Buzz
// * 30 -> FizzBuzz
// * 45 -> FizzBuzz
import {IFizzBuzz, FizzBuzz} from '../src/index'
describe('测试 FizzBuzz 类', () => {
    test('FizzBuzz should be defined', () => {
        expect(FizzBuzz).toBeDefined()
    })

    let fizzBuzz : IFizzBuzz

    beforeEach(() => {
        fizzBuzz = new FizzBuzz()
        return fizzBuzz
    })
    test('fizzBuzz should be defined', () => {
        expect(fizzBuzz).toBeDefined()
    })
    test('fizzBuzz.getFizzBuzzResult() should be defined', () => {
        expect(fizzBuzz.getFizzBuzzResult(0)).toBeDefined()
    })
    test('given 1 should return 1', () => {
        expect(fizzBuzz.getFizzBuzzResult(1)).toBe(1)
    })

    
})
