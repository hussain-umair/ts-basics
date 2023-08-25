const stringEcho = (arg: string): string => arg
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
  if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) return true
  return false
}

const isTrue = <T>(arg: T): { arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      arg,
      is: false
    }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false}
  }

  return {
    arg,
    is: !!arg
  }
}

interface BoolCheck<T> {
  arg: T,
  is: boolean
}

const checkBool = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      arg,
      is: false
    }
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false}
  }

  return {
    arg,
    is: !!arg
  }
}

interface HasId {
  id: number
}
const processUser = <T extends HasId>(user: T): T => {
  return user
}
processUser({ id: 1, name: 'Umair'})

const getUserProperty = 
  <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
  }