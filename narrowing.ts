function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') return " ".repeat(padding) + input
  return padding + input
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === 'string') {
    console.log(strs)
  }
}

//////// Functions
type DescribableFunction = {
  description: string;
  (someArg: number): boolean // this a function call signature
}
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6))
}
function myFunc(someArg: number) {
  return someArg > 3
}
myFunc.description = "Default Description"
doSomething(myFunc)

// Construct Signatures
type SomeObject = {}
type SomeConstructor = {
  new (s: string): SomeObject
}
function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}

interface CallOrConstruct {
  new (s: string): Date
  (n?: number): string
}

function firstElement(arr: any[]) {
  return arr[0]
}
function genFunc<T>(arr: T[]): T{
  return arr[0]
}

function map<Input, Output>(arr: Input[], fn: (el: Input) => Output): Output[] {
  return arr.map(fn)
}

// Constraints
function longest<T extends { length: number }>(a: T, b: T) {
  if(a.length > b.length) return a
  return b
}
longest([1,2], [1,2,3])
longest('abv', 'abcd')
// longest(1, 2)

function combine<Type>(arr1: Type[], arr2: Type[]) {
  return arr1.concat(arr2)
}
combine<number|string>([1,2,3], ['hello'])
////Overload Signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimeStamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) return new Date(y, mOrTimeStamp, d)
  return new Date(mOrTimeStamp)
}

// generics type mutations
function identity(arg: number): number {
  return arg
}
function genIdentity<T>(arg: T): T {
  return arg
}
// explicitly set while calling
const output = genIdentity<string>("hello")
const genOutput = genIdentity("Hello")
let myIdentity: <Type>(arg: Type) => Type = genIdentity
interface GenericIdentityFn<Type> {
  description: string
  <Type>(arg: Type): Type
}
genIdentity.description = 'hello'
const genIdentityFn: GenericIdentityFn<string> = genIdentity


//// Generic classes
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 1
myGenericNumber.add = (x, y) => x+y

// Generic Constraints
interface LengthWise {
  length: number
}
function logging<Type extends LengthWise>(arg: Type): Type {
  console.log(arg.length)
  return arg
}

// Type Parameters in Generic Constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let x = { a: 1, b: 2, c: 3 }
getProperty(x, 'a')
getProperty(x, 'd')

// class types in generics
function create<T>(c: { new (): T }) {
  return new c()
}

class BeeKeeper {
  hasMask: boolean = true
}
class ZooKeeper {
  nameTag: string = 'Mikle'
}
class Animal {
  numLegs: number = 4
}
class Bee extends Animal {
  numLegs = 6
  keeper: BeeKeeper = new BeeKeeper()
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}
createInstance(Lion).keeper.nameTag
createInstance(Bee).keeper.hasMask

// Generic Parameter Defaults
// TypeOf
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
function f() {
  return {x:1, y:2}
}
type P = ReturnType<typeof f>

// Indexed Access Types
type PersonType = { age: number, name: string}
type Age = PersonType["age"]
type I1 = PersonType["age" | "name"]
type I2 = PersonType[keyof PersonType]

const MyArr = [
  { name: "alice", age: 14},
  { name: "ice", age: 12},
  { name: "shr", age: 4}
]
type ArrPerson = typeof MyArr[number]
type ArrAge = typeof MyArr[number]["age"]

// Conditional Types
interface CondAnimal {
  live(): void
}
interface CondDog extends CondAnimal {
  woof(): void
}
type Example1 = CondDog extends CondAnimal ? number : string
type Example2 = RegExp extends CondAnimal ? number : string
interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}
// function createLabel(id: number): IdLabel
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented"
// }
type NameOrId<T extends number|string> = T extends number ? IdLabel : NameLabel
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented"
}
let a = createLabel("string")
let b = createLabel(2)

type MessageOf<T extends { message: unknown }> = T["message"]
interface Email {
  message: string
}
type EmailMessageContests = MessageOf<Email>

type Flatten<T> = T extends any[] ? T[number] : T
type Str = Flatten<string[]>
type Num = Flatten<number>
type Flattenn<Type> = Type extends Array<infer Item> ? Item : Type
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never
type Numm = GetReturnType<() => number>
type Strr = GetReturnType<(x: string) => string>
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>

declare function stringOrNum(x: string): number
declare function stringOrNum(x: number): string
declare function stringOrNum(x: string | number): string | number
type T1 = ReturnType<typeof stringOrNum>

// Mapped Types
// type OnlyBoolsAndHorses = {
//   [key: string]: boolean | Horse
// }
// const conforms: OnlyBoolsAndHorses = {
//   del: true,
//   rodney: false,
// }
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean
}
type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
}
type FeatureOptions = OptionsFlags<Features>