function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }

}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {  // we have to typecast in the return datatypoe also
    return (pet as Fish).swim !== undefined  // typecasting of pet to fish. and if fish have the method .swim then return
} // but it returns a type of boolean which doesn't help finding out Whether it's a Fish or Bird

function getSomeFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Food"
    } else {
        pet
        return "Bird Food"
    }
}