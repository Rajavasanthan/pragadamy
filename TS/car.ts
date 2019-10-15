export class Vehicle{
    name;
}

export type Direction = 'LEFT' | 'RIGHT' | 'FRONT' | 'BACK';

export interface Location {
    time : string,
    location : string
}

export interface CarConfig {
    move(direction:Direction):void;
}

export class Car extends Vehicle implements CarConfig{
    private brand;
    color;

    constructor(){
        super();
    }
    
    move(direction:Direction){

    }

    stop(){

    }

    location(locations:Location[]){

    }
}