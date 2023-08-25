function myLogFunction() {
  return (str: string) => {
    console.log(str)
  }
}

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = ""
    log(str: string) {
      console.log(str)
      this.completeLog += str + "\n"
    }
    dumpLog() {
      return this.completeLog
    }
  }
}
const MyLoggerClass = createLoggerClass()
const logger2 = new MyLoggerClass()
logger2.log("Foo")
console.log(logger2.dumpLog())

function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {}

    set (id: string, value: T) {
    this.db[id] = value
    }
    get (id: string): T {
      return this.db[id]
    }
    getObject() {
      return this.db
    }
  }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>()
const sdb1 = new StringDatabase()
sdb1.set("foo", "bar")
sdb1.get('foo')

type Constructor<T> = new (...args: any[]) => T

function Dumpable<T extends Constructor<{
  getObject(): object; 
}>>(Base: T) {
  return class extends Base {
    dump() {
      console.log(this.getObject())
    }
  }
}

const DumpableStringDatabase = Dumpable(StringDatabase)
const sdb2 = new DumpableStringDatabase()
sdb2.set("jack", "holle jack")
sdb2.dump()