import { MouseEventHandler } from "react"
export enum ColorMode {
    DARK,
    NORMAL,
}
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
export enum PromptType {
    NOINPUT,
    INPUT,
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
export interface NavItem {
    to:string,
    name:string,
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
export interface PromptObj {
    type?:PromptType,
    title:string,
    message:string,
    show?:boolean,
    promptValue?:string | number,
    confirmCallback:Function,
}
export interface DocumentHistoryObj {
    name:string,
    documentImg:string
}