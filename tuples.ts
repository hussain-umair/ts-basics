type ThreeDCoordinate = [x: number, y: number, z: number]

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
  return [
    c1[0] + c2[0],
    c1[1] + c2[1],
    c1[2] + c2[2],
  ]
}

function simpleStrState(initial: string): [() => string, (v: string) => void] {
  let str = initial
  return [
    () => str,
    (v: string) => {
      str = v
    }
  ]
}
const [str1Getter, str1Setter] = simpleStrState("hello")
const [str2Getter, str2Setter] = simpleStrState("Umair")
console.log(str1Getter())
console.log(str2Getter())
str1Setter('bye')
str2Setter("Hussain")
console.log(str1Getter())
console.log(str2Getter())
