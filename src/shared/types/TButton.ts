import { ReactNode, Ref} from "react";

export type TButton  = {
    children: ReactNode,
    onClick?: () => void,
    className?: string | undefined,
    autoFocus?: boolean,
    refButton?: Ref<HTMLButtonElement>
}