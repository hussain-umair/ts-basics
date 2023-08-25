// type FilterFunction<T> = (data: T[keyof T]) => boolean
// type Filters<T> = Record<keyof T, FilterFunction<T>[]>

// class EventProcessor<T extends {}> {
//   private filters: Filters<T> = <Filters<T>>{}

//   handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {}

//   addFilter<K extends keyof T>(
//     eventName: K,
//     filter: (data: T[K]) => boolean
//   ): void {
//     // this.filters[eventName] ||= []
//     this.filters[eventName].push(filter)
//   }

//   addMap<K extends keyof T>(
//     eventName: K,
//     map: (data: T[K]) => T[K]
//   ): void {}

//   getProcessedEvents() {}
// }

// interface EventMap {
//   login: { user?: string, name?: string, hasSession?: boolean },
//   logout: { user?: string }
// }

// class UserEventProcessor extends EventProcessor<EventMap> {}
// const uep = new UserEventProcessor()
// uep.addFilter("login", ({ user }) => Boolean(user))
// uep.addMap("login", (data) => ({
//   ...data,
//   hasSession: Boolean(data.user && data.name)
// }))
// uep.handleEvent("login", { user: null, name: "jack" })
// uep.handleEvent("login", { user: "tom", name: "tomas" })
// uep.handleEvent("logout", { user: "tom" })

// console.log(uep.getProcessedEvents())


class Log {
  static count: number = 5
  get(): number {
    return Log.count
  }

  set(val: number): void {
    Log.count = val
  }
}
Log.count = 6
const log = new Log()
console.log(log.get())
