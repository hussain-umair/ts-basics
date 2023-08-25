interface Database {
  get(id: string): string,
  set(id: string, value: string): void
}
interface Persistable {
  saveToString(): string;
  restoreFromString(storedString: string): void
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {}

  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}
class PersistentDatabase extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedString: string): void {
    this.db = JSON.parse(storedString)
  }
}


const myDB = new InMemoryDatabase()
myDB.set("foo", "bar")
console.log(myDB.get("foo"))