export function printToText (text: string, callback: () => void): void {
    console.log(text)
    callback()
}

type MutationFunction = (v: number) => number
export function arrayMutate(
    numbers: number[], 
    mutate: MutationFunction 
    ): number[] {
    return numbers.map(mutate)
}

const myNewMutationFunction: MutationFunction = (v: number) => v * 10
console.log(arrayMutate([1, 2, 3], myNewMutationFunction))

type AdderFunction = (v: number) => number
export function createAdder(num: number): AdderFunction {
    return (val: number) => num + val
}
const addOne = createAdder(1)
console.log(addOne(55))
