export enum InputType{
    NUMBER,
    TEXT,
    IMAGE,
    FILE,
}
export interface Indecator{
    step:number,
    title:string,
    active:boolean,
    done:boolean
}