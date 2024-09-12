import { ReactNode } from "react";
export type TButton  = {
    children: ReactNode,
    onClick?: () => void,
    className?: string;
}