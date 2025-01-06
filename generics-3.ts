interface Database {
    connection: string, 
    username: string, 
    password: string, 

}


function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {connection: , username: , password}) // now we have to pass a number for U asa it extends number
// we have to pass all the 