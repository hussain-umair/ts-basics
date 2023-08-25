interface Coordinate {
    x: number,
    y: number,
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    if (typeof arg1 === 'string') {
        arg1.split(',').forEach(el => {
            const [k, v] = el.split(':')
            coord[k as "x" | "y"] = parseInt(v)
        })
    }
    else if (typeof arg1 === 'object') {
        coord = {
            ...arg1 as Coordinate
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        }
    }
    return coord
}

console.log(parseCoordinate(1, 2))
console.log(parseCoordinate({ x: 1, y: 2 }))
console.log(parseCoordinate("x:1,y:2"))