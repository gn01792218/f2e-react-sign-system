import { MouseEventHandler } from "react"
export enum BtnType {
    PRIMARY,
    SECONDARY
}
export enum InputType {
    NUMBER,
    TEXT,
    IMAGE,
    FILE,
    PDF,
}
export interface Indecator {
    step:number,
    title:string,
    active:boolean,
    done:boolean
}
export interface Button {
    type?:BtnType,
    title:string,
    clickHandler:MouseEventHandler<HTMLButtonElement>
}