
import { IFindSubString, FindSubString } from '../src/FindSubString'

describe('测试 FindSubString 类', () => {
    let instance: IFindSubString
    beforeEach(() => {
        instance = new FindSubString()
        return instance
    })
    test('new FindSubString() should return a instance', () => {
        expect(FindSubString).toBeDefined()
    })
    test('search() shoule defined', () => {
        expect(instance.search('')).toBeDefined()
    })
    test(`given '' should return {num : 0, index : []}`, () => {
        expect(instance.search('')).toStrictEqual({ num: 0, indexs: [] })
    })
    test(`give 'a' should return {num : 0, index : []} `, () => {
        expect(instance.search('a')).toStrictEqual({ num: 0, indexs: [] })
    })
    test(`give 'ab' should return {num : 1, index : [0]} `, () => {
        expect(instance.search('ab')).toStrictEqual({ num: 1, indexs: [0] })
    })
    test(`give 'aba' should return {num : 1, index : [0]} `, () => {
        expect(instance.search('aba')).toStrictEqual({ num: 1, indexs: [0] })
    })
    test(`give 'abab' should return {num : 1, index : [0,2]} `, () => {
        expect(instance.search('abab')).toStrictEqual({ num: 2, indexs: [0, 2] })
    })
    test(`give 'ababababab' should return {num : 1, index : [0, 2,4,6,8]} `, () => {
        expect(instance.search('ababababab')).toStrictEqual({ num: 5, indexs: [0,2,4,6,8]})
    })
    test(`give 'aaabaa' should return {num : 1, index : [2]} `, () => {
        expect(instance.search('aaabaa')).toStrictEqual({ num: 1, indexs: [2]})
    })
    test(`give 'aaabeeebbaddabddab' should return {num : 2, index : [2,12,16]} `, () => {
        expect(instance.search('aaabeeebbaddabddab')).toStrictEqual({ num: 3, indexs: [2,12,16]})
    })
    test(`give 'hcvhxnm' should return {num : 0, index : []} `, () => {
        expect(instance.search('hcvhxnm')).toStrictEqual({ num: 0, indexs: []})
    })



    // 
})

