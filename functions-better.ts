function addTwo(num: number): number {
     return num + 2;  // now it'll return only of type number and if we try to return other datatype from this function it'll throw error 
}

addTwo(4); 

// One of the cases in ts. will be handled later
// function getVal(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s : string): string => {
    return ""
}

const heros = ["naruto", "sasuke", "itachi"]
heros.map((hero: string): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {  // never is best practice to use for error handling part in ts
    throw new Error(errmsg)
}

export {}