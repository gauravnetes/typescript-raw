interface Circle {
    kind: "circle", 
    radius: number
}

interface Square {
    kind: "square", 
    side: number
}

interface Rectangle{
    kind: "rectangle", 
    length: number, 
    width: number
}

type Shape = Circle | Square // | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } else {
        return shape.side * shape.side
    }
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square": 
            return shape.side * shape.side

        default:
            const _defaultForShape: never = shape
            return _defaultForShape          // to make the code futureproof if any other shapes get added in the future
    }

}