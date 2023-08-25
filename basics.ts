"use strict"
let userName: string = "hussain"
let hasLoggedIn: boolean = true
userName += " umair"
console.log(userName)

let myNumber: number = 10

let myRegex: RegExp = /foo/

const names: string[] = userName.split(" ")

const myValues: Array<number> = [1, 2, 3]

interface Person {
    firstName: string,
    lastName: string
}

const myPerson: Person = {
    firstName: 'Umair',
    lastName: 'Hussain'
}

const ids: Record<number, string | string[]> = {
    10: 'a',
    20: 'b',
    30: ['a', 'b']
}
ids[30] = 'c'

// --noImplicitAny
const myAny = (err) => {}
