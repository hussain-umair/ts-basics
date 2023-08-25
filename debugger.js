console.log('A')
const pro = new Promise((res, rej) => {
    console.log('B')
    res('D')
    console.log('C')
    rej('E')
    console.log('H')
})

console.log('F')
pro.then(resp => console.log(resp)).catch(err => { console.log(err)})

console.log('G')