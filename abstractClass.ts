abstract class takePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string
    ){}

    abstract getSepia() : void
    getReelTime(): number{
        // complex algorithm 
        return 34;
    }
}

// const chandra = new takePhoto("test", "Test")  // once the class is declared as abstract, no new object can be created from this class

class Instagram extends takePhoto {
    constructor(public cameraMode: string, public filter: string, public burstPhoto: number) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia");
        
    }
}

