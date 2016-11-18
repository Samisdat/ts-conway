export default class Tween {

    private from:number;
    private to:number;
    private current:number;

    private stepInterval:number;

    private steps:number;
    private stepsDone:number = 0;

    constructor(from:number, steps = 30) {
        this.from = from;
        this.to = from;
        this.current = from;
        this.steps = steps;
    }
    
    public setTo(to:number):void{

        this.to = to;
        this.from = this.current;

        this.stepsDone = 0;

        if(to === this.from){
            this.stepInterval = 0;
            return;
        }

        const diff = to - this.from;

        this.stepInterval = diff / this.steps; 

    }

    public getFrom():number{
        return this.from;
    }
    public getCurrent():number{
        return this.current;
    }
    public getTo():number{
        return this.to;
    }

    public update(){

        if(this.steps <= this.stepsDone){
            this.current = this.to;
            return;
        }

        this.current += this.stepInterval;

        this.stepsDone += 1;

        if(this.steps === this.stepsDone){
            this.current = this.to;
        }

    }
    
}