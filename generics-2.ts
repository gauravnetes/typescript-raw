function getSearchProducts<T,>(products: T[]): T {
    // do some database operation
    const myIndex = 3
    return products[myIndex]
}

// convert tht above function into an arrow function
const getSomeSearchProducts = <T,>(products: T[]):T => {
    // do some database operation
    const myIndex = 3
    return products[myIndex]
}

// <T,> => in react it's used to put a comma there to specify that it's a generic and not a jsx syntax for best praactices