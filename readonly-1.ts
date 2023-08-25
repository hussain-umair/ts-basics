interface Cat {
  readonly name: string,
  breed: string
}
function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed
  }
}
const usul = makeCat('Usul', 'Tabby')

function makeCoordinate(
  x: number, 
  y: number, 
  z: number
): readonly [number, number, number] {
  return [x, y, z]
}

const reallyConst = [1,2,3,4] as const