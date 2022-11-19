import { MouseEventHandler } from "react"
export enum Status {
    SUCCESS,
    ALERT,
    ERROR,
}
export enum BtnType {
    PRIMARY,
    SECONDARY,
    COLOR,
    CLOSE
}
export enum InputType {
    NUMBER,
    TEXT,
    COLOR,
    FILE,
}
export interface Indecator {
    step:number,
    title:string,
    active:boolean,
    done:boolean
}
export interface Button {
    type?:BtnType,
    title?:string,
    color?:string,
    active?:boolean,
    clickHandler:MouseEventHandler<HTMLButtonElement>,
}
export interface LoadingData {
    width?:string,
    height?:string,
    loading:boolean,
    strokfillerColor?:string, //loading旋轉的顏色
    strokColor?:string //loading框框底色
}
export interface MsgBoxObj {
    type:Status
    title:string,
    message:string,
    show?:boolean,
    duration?:number,
}