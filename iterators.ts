interface MyIteratorResult<T> {
  done: boolean
  value: T | null
}

interface MyIterator<T> {
  next(value?: any): MyIteratorResult<T>;
  return?(value?: any): MyIteratorResult<T>;
  throw?(e?: any): MyIteratorResult<T>;
}

class Component {
  constructor(public name: string) {}
}

class Frame implements MyIterator<Component> {
  private pointer = 0

  constructor(public name: string, public components: Component[]) {}

  public next(): MyIteratorResult<Component> {
    if (this.pointer < this.components.length) {

      return { 
        done: false, 
        value: this.components[this.pointer++] }
    } else {
      return {
        done: true,
        value: null,
      }
    }
  }
}

////////////// Using [Symbol.iterator] //////////
class SymbolFrame implements IterableIterator<Component> {
  private pointer = 0
  constructor(public name: string, public components: Component[]) {}

  next(): IteratorResult<Component> {

    if (this.pointer < this.components.length) {

      return {
        done: false,
        value: this.components[this.pointer++]
      }
    } else {
      return {
        done: true,
        value: null,
      }
    }
  }
  [Symbol.iterator](): IterableIterator<Component> {
    return this
  }
}

////////////// Fib Series Example ///////////
class Fib implements IterableIterator<number> {
  protected fn1 = 0
  protected fn2 = 1

  constructor(protected maxValue: number) {}

  public next(): IteratorResult<number> {
    var current = this.fn1
    this.fn1 = this.fn2
    this.fn2 = current + this.fn2

    if (this.maxValue != null && current >= this.maxValue) {
      return {
        done: true,
        value: null
      }
    } else {
      return {
        done: false,
        value: current
      }
    }
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this
  }
}

const fibMax50 = new Fib(50)
console.log(Array.from(fibMax50))

const fibMax21 = new Fib(21)
for (const item of fibMax21) {
  console.log(item)
}