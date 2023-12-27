import { ReactNode } from "react"

export type IconNameType =
    | "logo"
    | "template"
    | "search"
    | "clock"
    | "board"
    | "add"
    | "setting"
    | "career"
    | "checkbox"

export interface IconProps {
    name: IconNameType
    className?: string
}

export type IconType = { [name: string]: ReactNode }
