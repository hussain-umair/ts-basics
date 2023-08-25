function myForEach<T>(items: T[], forEachFunc: (item: T) => void): void {
  items.reduce((a, c) => {
    forEachFunc(c)
    return undefined
  }, undefined)
}

function myFilter<T>(items: T[], filterFunc: (item: T) => boolean): T[] {
  return items.reduce(
    (a, item) => filterFunc(item) ? [...a, item] : a, [] as T[]
  )
}

function myMap<T, K>(items: T[], mapFunc: (item: T) => K): K[] {
  return items.reduce((a, c) => [...a, mapFunc(c)], [] as K[])
}
