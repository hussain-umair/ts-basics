interface GenericDatabase<T, K> {
  get(id: K): T,
  set(id: K, value: T): void
}
interface Persistable {
  saveToString(): string;
  restoreFromString(storedString: string): void
}
type DBKeyType = string | number | symbol
class InMemoryGenericDatabase<T, K extends DBKeyType> implements GenericDatabase<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>

  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}
class PersistentGenericDatabase<T, K extends DBKeyType> extends InMemoryGenericDatabase<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedString: string): void {
    this.db = JSON.parse(storedString)
  }
}


const myGenericDB = new InMemoryGenericDatabase<number, string>()
myGenericDB.set("foo", 2)
console.log(myGenericDB.get("foo"))

const persistentGenericDb = new PersistentGenericDatabase<number, string>()
persistentGenericDb.set("foo", 22)
const saved = persistentGenericDb.saveToString()
const persistentGenericDb2 = new PersistentGenericDatabase<number, string>()
persistentGenericDb2.restoreFromString(saved)
console.log(persistentGenericDb2.get("foo"))