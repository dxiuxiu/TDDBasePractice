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

            return this.getResultFromLongString(str, result, subString);
        }
        console.log(result)
        return result
    }

    private getResultFromLongString(str: string, result2: any, subString: string, subStartIndex = -1) {
        // let result2: IResult = {
        //     num: 0,
        //     indexs: []
        // };
        const index = str.indexOf(subString, subStartIndex + 1);
        if (index > -1) {
            result2.indexs.push(index);
            result2.num++;
            this.getResultFromLongString(str, result2, subString, index+1);

            // const index2 = str.indexOf(subString, index + 1);
            // if (index2 > -1) {
            //     result2.indexs.push(index2);
            //     result2.num++;
            // }
        }
        return result2;
    }
}