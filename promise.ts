import fs = require('fs')

function loadJson(name: string) {
  return JSON.parse(fs.readFileSync(name).toString())
}
loadJson('good.json')

try {
  console.log(loadJson('absent.json'))
} catch(err) { console.log('err') }


/// decent attempt ////
function loadJsonWithCallback(filename: string, cb: (err: Error | null, data?: any) => void) {
  fs.readFile(filename, function (err, data) {
    if(err) cb(err)
    else cb(null, JSON.parse(data.toString()))
  })
}

/// perfect code
function loadJsonWithCallbackAndTryCatch(filename: string, cb: (err: Error|null, data?: any) => void) {
  fs.readFile(filename, function(err, data) {
    if (err) return cb(err)

    try {
      var parse = JSON.parse(data.toString())
    } catch(err: any) {
      return cb(err)
    }

    return cb(null, parse)
  })
}

//// Using Promises
function readAsyncFile(filename: string): Promise<string> {
  return new Promise((res, rej) => {
    fs.readFile(filename, (err, data) => {
      if (err) rej(err)
      else res(data.toString())
    })
  })
}

function loadJsonAsync(filename: string): Promise<any> {
  return readAsyncFile(filename).then(res => JSON.parse(res))
}
