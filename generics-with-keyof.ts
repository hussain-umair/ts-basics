function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[], 
  key: KeyType
  ): DataType[KeyType][] {
  return items.map(item => item[key])
}

const dogs = [
  {
    name: 'Mini',
    age: 12
  },
  {
    name: 'LG',
    age: 13
  }
]
console.log(pluck(dogs, 'name'))

interface BaseEvent {
  time: number,
  user: string
}
interface EventMap {
  addToCart: BaseEvent & { quantity: number, productID: string},
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name, 
  data: EventMap[Name]
): void {
  console.log([name, data])
}

sendEvent("addToCart", { productID: '1', quantity: 10, time: 20, user: 'Shakoor' })
sendEvent("checkout", { time: 12, user: 'awe' })