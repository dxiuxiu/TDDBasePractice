
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

    
})
