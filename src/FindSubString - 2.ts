import { tsIndexSignature } from "../node_modules/@babel/types";


interface IResult {
    num: number,
    indexs: number[]
}
export interface IFindSubString {
    search: (str: string) => IResult
}

export class FindSubString implements IFindSubString {

    // 1
    // search(str: string) {
    //     return {
    //         num: -1,
    //         index: [-1]
    //     }
    // }

    search(str: string) {

        const subString = 'ab'
        let result: IResult = {
            num: 0,
            indexs: []
        }

        if (str.length > 1) {
            const index = str.indexOf(subString)
            if (index > -1) {
                result.indexs.push(index)
                result.num++
                const index2 = str.indexOf(subString, index + 1)
                if (index2 > -1) {
                    result.indexs.push(index2)
                    result.num++
                }
            }
        }
        return result
    }
}