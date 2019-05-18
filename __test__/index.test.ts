// * 创建 StringCalculator 类
// * 创建 add 方法
// * '' => 0
// * '1' => 1 '2' => 2
// * 两个数字，逗号分割 '1,2' => 3 '10,20' => 30
// * 两个数字，换行符分割 '1\n2' => 3
// * 以任意方式分割字符串 '1\n2,3\n4' => 10
// * 不允许使用负数 '-1,2,-3' => 'negatives not allowed: -1,-3'


import {IStringCalculator, StringCalculator} from '../src/StringCalculator'

describe('测试 stringCalculator 类', () => {
    let instance: IStringCalculator
    beforeEach(() => {
        instance = new StringCalculator()
        return instance
    })
    test('should work', () => {
        expect(1).toBe(1)
    })
    test('new StringCalculator() should return a instance', () => {
        expect(StringCalculator).toBeDefined()
    })
    test('StringCalculator() should have add method', () => {
        expect(instance.add('')).toBeDefined()
    })
    test(`given '' should return 0`, () => {
        expect(instance.add('')).toBe(0)
    })

    const testTable = [['1', 1], ['2', 2]]

    test.each(testTable)('given %s, should get %d', (input, expected) => {
        expect(instance.add(input as string)).toBe(expected)
    })
    test(`given 1 should return 1`, () => {
        expect(instance.add('1')).toBe(1)
    })

    test(`given 2 should return 2`, () => {
        expect(instance.add('2')).toBe(2)
    })
    test(`given '1,2' should return 3`, () => {
        expect(instance.add('1,2')).toBe(3)
    })
    test(`given '10,20' should return 30`, () => {
        expect(instance.add('10,20')).toBe(30)
    })
    test(`given '10,20' should return 30`, () => {
        expect(instance.add('10,20')).not.toBe(40)
    })
    test(`given '1\n2' should return 3`, () => {
        expect(instance.add('1\n2')).toBe(3)
    })
    test(`given '1\n2,3\n4' should return 10`, () => {
        expect(instance.add('1\n2,3\n4')).toBe(10)
    })
    test(`given '1,2,3\n40' should return 10`, () => {
        expect(instance.add('1,2,3\n40')).toBe(46)
    })
    test(`given '1,2,3\n40' should return 10`, () => {
        expect(instance.add('1,2,3\n40')).not.toBe(123)
    })
    test(`given '-1,2,-3' should throw error`, () => {
        expect(() => instance.add('-1,2,-3')).toThrowError('negatives are not allowed')
    })
})