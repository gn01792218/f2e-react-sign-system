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
export interface LoadingData {
    width?:string,
    height?:string,
    loading:boolean,
    strokfillerColor?:string, //loading旋轉的顏色
    strokColor?:string //loading框框底色
}