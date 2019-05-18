

export interface IStringCalculator {
    add: (str: string) => number
}
export class StringCalculator implements IStringCalculator {

    SPLITERS = [',', '\n', '-']
    add(str: string) {
        if (str.indexOf(this.SPLITERS[2]) >= 0) {
            throw new Error('negatives are not allowed')
        }
        if (str.length > 0) {
            if (str.indexOf(this.SPLITERS[0]) >= 0 && str.indexOf(this.SPLITERS[1]) >= 0) {
                return this.complexityCalculate(str);
            }
            if (str.indexOf(this.SPLITERS[0]) >= 0) {
                return this.processString(str, this.SPLITERS[0]);
            }
            if (str.indexOf(this.SPLITERS[1]) >= 0) {
                return this.processString(str, this.SPLITERS[1]);
            }
            return parseInt(str)
        }
        return 0
    }

    private complexityCalculate(str: string) {
        const first = str.split(this.SPLITERS[0]);
        let tempArr: string[] = [];
        first.forEach(items => {
            items.split(this.SPLITERS[1]).forEach(element => {
                tempArr.push(element);
            });
        });
        return this.calculate(tempArr);
    }

    private processString(str: string, spliter: string) {
        const strArr = str.split(spliter);
        return this.calculate(strArr);
    }

    calculate(str: string[]): number {
        return str.reduce((total, current) => {
            return total += current === ''? 0 : parseInt(current)
        }, 0)
    }
}