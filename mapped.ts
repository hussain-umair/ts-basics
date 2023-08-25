type MyFlexibleDogInfo = {
  name: string,
  [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
  name: 'LG',
  breed: "Mutt",
  age: 22,
}

interface DogInfo {
  name: string,
  age: number
}

type OptionFlags<Type> = {
  [Property in keyof Type]: boolean
}

type DogInfoOptions = OptionFlags<DogInfo>
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void
}


function listenToObject<T>(obj: T, listener: Listeners<T>): void {
  throw "Needs to be implemented"
}
const lg: DogInfo = {
  name: "LG",
  age: 13,
}
listenToObject(lg, {
  onNameChange: (newValue: string) => {},
  onAgeChange: (newValue: number) => {},
})