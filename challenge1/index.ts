import houses from './houses'

interface House {
    name: string,
    planets: string | string[]
}
interface HouseWithID extends House {
    id: number,
}

function findHouse(
    input: string | House[], 
    filter?: (house: House) => boolean
    ): HouseWithID[] {
    const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input
    return (filter ? houses.filter(filter) : houses).map((house) => ({
        id: houses.indexOf(house),
        ...house
    }))
}

console.log(
    findHouse(JSON.stringify(houses), ({ name }) => name === "Dome")
)

console.log(
    findHouse(houses, ({ name }) => name === "Star")
)

