export interface IFizzBuzz {
    getFizzBuzzResult: (num: number) =>  string|number
}
export  class FizzBuzz{
    getFizzBuzzResult(num: number){
        return num
    }
}