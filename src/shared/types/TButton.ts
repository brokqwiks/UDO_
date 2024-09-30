import { LegacyRef, ReactNode} from "react";
export type TButton  = {
    children: ReactNode,
    onClick?: () => void,
    className?: string | undefined,
    autoFocus?: boolean,
    refButton?: LegacyRef<HTMLButtonElement> 
}