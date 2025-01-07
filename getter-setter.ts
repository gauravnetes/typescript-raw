class User {
    protected _courseCount = 1  // when we give protected. it can be accessed in any other class outside this class who inherits this class
    readonly city: string = "kolkata" // now I can't even access this value. But with only readonly I can access it without modifying
    constructor(public email: string, public name: string) {
        
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    } // getter
    
    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {   // no return type/annotation
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1 ")
        }
        this.courseCount = courseNum                  
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount  // accessed in the SubUser class that inherits the class User
    }
} 

export {}